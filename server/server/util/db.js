var mysql = require('mysql');
var UUID = require('node-uuid');
var crypto = require('crypto');

function cryptPwd(password) {
    var md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}

// var pool = mysql.createPool({
//     host: '192.168.20.34',
//     port: '3306',
//     user: 'rendebug',
//     password: 'rendebug,.123',
//     timezone: 'CMT-8',
//     charset: 'utf8mb4',
//     ssl: false,
//     multipleStatements: true,
//     database: 'rendebug'
// });

var pool = mysql.createPool({
    host: 'site.s.chime.me',
    port: '3306',
    user: 'master',
    password: '****',
    timezone: 'CMT-8',
    charset: 'utf8',
    ssl: false,
    multipleStatements: true,
    database: 'ren_debug'
});

function domainURI(str){
    if (!str) return '';
    var durl=/http[s]{0,1}:\/\/([^\/]+)\//i;
    var domain = str.match(durl);
    if (domain) {
        return domain[1];
    } else {
        return '';
    }
}

var BugLog = function (vm) {
    if (!vm) vm = {};
    var _ = this;
    _.id = UUID.v1().replace(/-/g, '');
    _.app_version = vm.appVersion || '';
    _.app_key = vm.apiKey || '';
    _.version = vm.version || '';
    _.user_agent = vm.userAgent || '';
    _.locale = vm.locale || '';
    _.url = vm.url || '';
    _.title = vm.title || '';
    _.time = vm.time || new Date().getTime();
    _.type = vm.type || '';
    _.detail = JSON.stringify(vm.detail || {});
    _.action_info = JSON.stringify(vm.actionInfo || []);
    _.custom = JSON.stringify(vm.custom || {});
    _.ip = vm.ip || '';
    _.event_count = vm.eventCount || 0;
    _.status = "未解决";
    _.domain = domainURI(vm.url);
}

var User = function (vm) {
    if (!vm) vm = {};
    var _ = this;
    _.id = UUID.v1().replace(/-/g, '');
    _.name = vm.name || '';
    _.login_name = vm.loginName || '';
    _.password = vm.password || '';
    _.time = vm.time || new Date().getTime();
    _.app_key = vm.app_key || '';
}

var buildWhere = function (bugInfo) {
    var where = '';
    if (bugInfo) {
        var vm = new BugLog();
        var keys = Object.keys(vm);
        keys.forEach(key => {
            var value = bugInfo[key];
            if(value) {
                if (Object.prototype.toString.call(value).slice(8, -1) === 'Number') {
                    where += ' AND ' + key + ' = ' + value;
                } else {
                    where += ' AND ' + key + ' = \'' + value + '\'';
                }
            }
        });
        if (bugInfo.startTime && bugInfo.endTime) {
            where += ' AND time BETWEEN ' + bugInfo.startTime + ' AND ' + bugInfo.endTime;
        }

        if (bugInfo.searchKey) {
            where += ` AND detail like '%${bugInfo.searchKey}%'`;
        }

        if (bugInfo.orderBy) {
            where += ' ORDER BY ' + bugInfo.orderBy;
        } else {
            where += ' ORDER BY time desc '
        }

        if (bugInfo.start && bugInfo.end) {
            where += ' limit ' + bugInfo.start + ' , ' + bugInfo.end
        }
    }
    return where;
}

var query = function (sql) {
    console.log(sql);
    return new Promise(function (resolve, reject) {
        pool.getConnection(function(err, conn) {
            if (err) {
                reject(err);
            } else {
                conn.query(sql, function(qerr, result) {
                    // 释放连接
                    conn.release();
                    if (qerr) {
                        console.log(qerr);
                        reject(qerr);
                    } else {
                        resolve(result);
                    }
                })
            }
        });
    })
}

var queryByParam = function (sql, param) {
    console.log(sql, param);
    return new Promise(function (resolve, reject) {
        pool.getConnection(function(err, conn) {
            if (err) {
                reject(err);
            } else {
                conn.query(sql, param, function(qerr, result) {
                    // 释放连接
                    conn.release();
                    if (qerr) {
                        console.log(qerr);
                        reject(qerr);
                    } else {
                        resolve(result);
                    }
                })
            }
        });
    })
}

var insert = function (table, vm) {
    var fields = [];
    var values = [];
    for (var key in vm) {
        fields.push(key);
        values.push(vm[key]);
    }


    var sql = `INSERT INTO ${table}(${fields.join(',')}) VALUES (${values.map(v => '?').join(',')});`;
    console.log(sql, values);
    return new Promise(function (resolve, reject) {
        pool.getConnection(function(err, conn) {
            if (err) {
                reject(err);
            } else {
                conn.query(sql, values, function(qerr, result) {
                    // 释放连接
                    conn.release();
                    if (qerr) {
                        console.log(qerr);
                        reject(qerr);
                    } else {
                        resolve(result);
                    }
                })
            }
        });
    })
}

var insertBugInfo = async function (bugInfo) {
    try {
        const querySql = 'select id, trigger_num from bug_log where detail = ?';
        let queryResult = await queryByParam(querySql, JSON.stringify(bugInfo.detail));
        if (queryResult && queryResult.length > 0) {
            const result = queryResult[0];
            let trigger = 2;
            if (result.trigger_num > 0) {
                trigger = result.trigger_num + 1;
            }
            const updateSql = 'update bug_log set trigger_num = ?, time = ?  where id = ?';
            let updateResult = await queryByParam(updateSql, [trigger, bugInfo.time, result.id]);
        } else {
            let insertResult = await insert('bug_log', new BugLog(bugInfo));
        }
    } catch (error) {
        console.error(error);
    }
    return true;
}

var queryBugInfoTotal = function(bugInfo) {
    var where = buildWhere(Object.assign({}, bugInfo, {start: null}));
    var sql = "SELECT COUNT(*) as total FROM bug_log WHERE 1 = 1" + where;
    return query(sql);
}

var queryBugInfoByWhere = function(bugInfo) {
    var where = buildWhere(bugInfo);
    var sql = "SELECT * FROM bug_log WHERE 1 = 1" + where;
    return query(sql);
}

var queryBugInfoReport = async function(startTime, endTime, count, appKey, vm = {}) {
    var out = [];
    var ceil = parseInt((endTime - startTime)/count);
    var otherWhere = '';
    if (vm.type) {
        otherWhere += ' AND type = \'' + vm.type + '\'';
    }
    for (let i = 0; i < count; i++) {
        var start = startTime + ceil * i;
        var end = start + ceil;
        let where =' AND time BETWEEN ' + start + ' AND ' + end + ' AND app_key = "' + appKey + '"';
        let sql = "SELECT count(*) as count FROM bug_log WHERE 1=1 " + where + otherWhere;
        let res = await query(sql);
        out.push({
            startTime: start,
            endTime: end,
            count: res[0].count
        });
    }
    return out;
}

var userLogin = async function (loginName, password) {
    let sql = `select * from user where login_name = '${loginName}' AND password = '${cryptPwd(password)}'`;
    let sqlResult = await query(sql);
    if (sqlResult && sqlResult.length > 0) {
        return sqlResult[0];
    } else {
        return null;
    }
}

var getUserByName = async function (loginName) {
    let sql = `select * from user where login_name = '${loginName}'`;
    let sqlResult = await query(sql);
    if (sqlResult && sqlResult.length > 0) {
        return sqlResult[0];
    } else {
        return null;
    }
}

var userRegister = async function (name, loginName, password) {
    let user = new User();
    user.name = name;
    user.login_name = loginName;
    user.password = cryptPwd(password);
    user.app_key = UUID.v4();
    let sqlResut = await insert('user', user);
    if (sqlResut) {
        return user;
    } else {
        return null;
    }
}

var updateBugStatusById = async function(id, status) {
    let sql = `update bug_log set status = '${status}' where id = '${id}'`;
    let sqlResut = await query(sql);
    if (sqlResut) {
        return true;
    } else {
        return false;
    }
}

var deleteBugByIds = async function(ids, appKey) {
    let questionParam = [];
    let valueParam = [appKey];
    for (let i = 0; i < ids.length; i++) {
        questionParam.push('?');
        valueParam.push(ids[i]);
    }

    let sql = `delete from bug_log where app_key = ? and id in (${questionParam.join(',')})`;
    let deleteResult = await queryByParam(sql, valueParam);
    return deleteResult || 0;
}

var deleteBugByKey = async function(appKey) {
    let sql = `delete from bug_log where app_key = ?`;
    let deleteResult = await queryByParam(sql, [appKey]);
    return deleteResult || 0;
}

module.exports = {
    query,
    insertBugInfo,
    queryBugInfoTotal,
    queryBugInfoByWhere,
    queryBugInfoReport,
    userLogin,
    userRegister,
    getUserByName,
    updateBugStatusById,
    deleteBugByIds,
    deleteBugByKey,
    queryByParam
}
