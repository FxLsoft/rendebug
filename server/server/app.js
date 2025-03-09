var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs");

var indexRouter = require("./routes/index");
var util = require("./util/index");
var socketServer = require("./util/socketServer");
var db = require("./util/db");
var Result = require("./util/result");

var app = express();
var upload = multer({ dest: "upload-tmp/" });
var uploadType = upload.single("recfile");

socketServer.init();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, "../public")));

// 解析 application/json
app.use(bodyParser.json({ limit: "1mb" }));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
var getClientIp = function(req) {
    var ip =
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress ||
        "";
    ip = ip.match(/\d+.\d+.\d+.\d+/);
    ip = ip ? ip.join(".") : null;
    return ip;
};

function getIPAdress(){  
    var interfaces = require('os').networkInterfaces();  
    for(var devName in interfaces){  
          var iface = interfaces[devName];  
          for(var i=0;i<iface.length;i++){  
               var alias = iface[i];  
               if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                     return alias.address;  
               }  
          }  
    }  
} 

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Security-Policy", "upgrade-insecure-requests");
    res.header("X-Powered-By", ' 3.2.1');
    if(req.method == 'OPTIONS') {
        res.sendStatus(206);
    } else {
        next();
    }
});
app.use("/", indexRouter);
app.use("/admin", indexRouter);
app.post("/event", async (req, res) => {
    // 设置跨域
    let apiKey = '';
    if (req.body) {
        apiKey = req.body.apiKey;
        if (!apiKey) {
            res.sendStatus(204);
            return;
        }
    }
    if (req.body && req.body.detail && req.body.detail.fileName) {
        var detail = req.body.detail;
        var matcher = /\/([\w.]*)(\?\S*)?$/.exec(detail.fileName);
        if (matcher && matcher[1]) {
            try {
                var sourceMapFile = path.join(__dirname, 'source-map', req.body.apiKey || '', matcher[1] + ".map");
                fs.accessSync(sourceMapFile);
                var originPosition = await util.analysisSourceMap(
                    sourceMapFile,
                    detail.lineNumber,
                    detail.columnNumber
                );
                console.log(originPosition);
                req.body.detail.originPosition = originPosition;
            } catch (err) {
                console.log(err);
            }
        }
    }
    let bugInfo = Object.assign({}, req.body, { ip: getClientIp(req) });
    db.insertBugInfo(bugInfo);
    socketServer.sendText("bug" + JSON.stringify(bugInfo), apiKey);
    res.sendStatus(204);
});
app.get("/event", async (req, res) => {
    // 设置跨域
    let {event} = req.query;
    let body = {};
    try {
        body = JSON.parse(decodeURIComponent(event));
    } catch (error) {
        console.log(error);
        res.sendStatus(204);
        return;
    }
    let apiKey = '';
    if (body) {
        apiKey = body.apiKey;
        if (!apiKey) {
            res.sendStatus(204);
            return;
        }
    }
    if (body && body.detail && body.detail.fileName) {
        var detail = body.detail;
        var matcher = /\/([\w.]*)(\?\S*)?$/.exec(detail.fileName);
        if (matcher && matcher[1]) {
            try {
                var sourceMapFile = path.join(__dirname, 'source-map', body.apiKey || '', matcher[1] + ".map");
                fs.accessSync(sourceMapFile);
                var originPosition = await util.analysisSourceMap(
                    sourceMapFile,
                    detail.lineNumber,
                    detail.columnNumber
                );
                console.log(originPosition);
                body.detail.originPosition = originPosition;
            } catch (err) {
                console.log(err);
            }
        }
    }
    let bugInfo = Object.assign({}, body, { ip: getClientIp(req) });
    db.insertBugInfo(bugInfo);
    socketServer.sendText("bug" + JSON.stringify(bugInfo), apiKey);
    res.sendStatus(204);
});
// source map 上传
app.post("/upload-map", uploadType, (req, res) => {
    // 设置跨域
    const { appId } = req.query // 从请求query中获取appId
    if (req.file) {
        if(!fs.existsSync(path.join(__dirname, 'source-map', appId || ''))) {
            fs.mkdirSync(path.join(__dirname, 'source-map', appId || ''))
        }
        const des_file = path.join(__dirname, 'source-map', appId || '', req.file.originalname);
        console.log('des_file',des_file);
        fs.readFile(req.file.path, function(err, data) {
            fs.writeFile(des_file, data, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    fs.unlinkSync(req.file.path);
                    let response = {
                        message: "File uploaded successfully",
                        filename: req.file.originalname
                    };
                    console.log(response);
                    res.end(JSON.stringify(response));
                }
            });
        });
    } else {
        res.sendStatus(204);
    }
});

app.use('/queryBugInfoByWhere', async(req, res, next) => {
    let result = new Result();
    let appKey = req.cookies.appKey || '';
    if (!appKey) {
        result.success = false;
        result.message = '未登录';
        res.end(JSON.stringify(result));
        return;
    }
    let param = req.query || {};
    param.app_key = appKey;
    let totalRes = await db.queryBugInfoTotal(param);
    let list = await db.queryBugInfoByWhere(param);
    for (var i = 0; i < list.length; i++) {
        try {
            list[i].detail = JSON.parse(list[i].detail);
        }catch (e) {
            console.log(e, list[i].detail);
        }
        try {
            list[i].custom = JSON.parse(list[i].custom);
        }catch (e) {
            console.log(e, list[i].custom);
        }
        try {
            list[i].action_info = JSON.parse(list[i].action_info);
        }catch (e) {
            console.log(e, list[i].action_info);
        }
    }
    result.data = {
        total: totalRes[0].total,
        list: list
    }
    res.end(JSON.stringify(result));
});

app.use('/queryBugInfoReport', async (req, res, next) => {
    let appKey = req.cookies.appKey || '';
    if (!appKey) {
        let result = new Result();
        result.success = false;
        result.message = '未登录';
        res.end(JSON.stringify(result));
        return;
    }
    let startTime = req.query.startTime, endTime = req.query.endTime || new Date().getTime(), count = req.query.count || 10;
    let sqlResut = await db.queryBugInfoReport(+startTime, +endTime, +count, appKey, req.query || {});
    let result = new Result(sqlResut);
    res.end(JSON.stringify(result));
});

app.use('/updateBugStatusById', async (req, res, next) => {
    let appKey = req.cookies.appKey || '';
    if (!appKey) {
        result.success = false;
        result.message = '未登录';
        res.end(JSON.stringify(result));
        return;
    }
    var status = req.body.status || req.query.status || '';
    var id = req.body.id || req.query.id || '';
    let sqlResut = await db.updateBugStatusById(id, status);
    var result = new Result(sqlResut);
    res.end(JSON.stringify(result));
});

app.use('/deleteBugByIds', async (req, res, next) => {
    let appKey = req.cookies.appKey || '';
    if (!appKey) {
        var result = new Result();
        result.success = false;
        result.message = '未登录';
        res.end(JSON.stringify(result));
        return;
    }
    var ids = req.body.ids || req.query.ids || '';
    if (!ids) {
        return new Result();
    }
    ids = ids.split(',');
    let sqlResut = await db.deleteBugByIds(ids, appKey);
    var result = new Result(sqlResut);
    res.end(JSON.stringify(result));
});
app.use('/deleteAllBugInfoByKey', async (req, res, next) => {
    let appKey = req.cookies.appKey || '';
    if (!appKey) {
        var result = new Result();
        result.success = false;
        result.message = '未登录';
        res.end(JSON.stringify(result));
        return;
    }
    let sqlResut = await db.deleteBugByKey(appKey);
    var result = new Result(sqlResut);
    res.end(JSON.stringify(result));
});

app.use('/queryByParam', async (req, res, next) => {
    let appKey = req.cookies.appKey || '';
    if (!appKey || appKey !== '2f739c30-c270-4142-8077-9a0c4b3df888') {
        var result = new Result();
        result.success = false;
        result.message = '未登录';
        res.end(JSON.stringify(result));
        return;
    }
    // sql, param
    var sql = req.body.sql || req.query.sql || '';
    var param = req.body.param || req.query.param || '';
    let sqlResut = await db.queryByParam(sql, param);
    var result = new Result(sqlResut);
    res.end(JSON.stringify(result));
});

app.use('/userLogin', async (req, res) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    var result = new Result();
    var loginName = req.body.loginName || req.query.loginName || '';
    var password = req.body.password || req.query.password || '';
    if (!loginName || !password) {
        result.success = false;
        result.message = "用户名或密码不能为空";
    } else {
        var user = await db.userLogin(loginName, password);
        if (user) {
            result.data = user;
            result.message = "登录成功";
            // res.cookie('user', user, {signed: true, maxAge: 3600});
        } else {
            result.success = false;
            result.message = "登录失败";
        }
    }
    res.end(JSON.stringify(result));
});

app.use('/userRegister', async (req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    var result = new Result();
    var loginName = req.body.loginName || req.query.loginName || '';
    var password = req.body.password || req.query.password || '';
    var name = req.body.name || req.query.name || ''; 
    if (!loginName || !password || !name) {
        result.success = false;
        result.message = "登录名或密码不能为空";
    } else {
        var hasUser = await db.getUserByName(loginName);
        if (hasUser) {
            result.success = false;
            result.message = "用户已存在";
        } else {
            var user = await db.userRegister(name, loginName, password);
            if (user) {
                result.data = user;
                result.message = "注册成功";
                // res.cookie('user', user, {signed: true, maxAge: 3600});
            } else {
                result.success = false;
                result.message = "注册失败";
            }
        }
    }
    res.end(JSON.stringify(result));
});

let responseJSContent = '';
app.get('/rendebug.js', (req,res,next) => {
    const {appId} = req.query;
    res.header("Cache-Control", "max-age=100000");
    res.header("Content-Type", "application/javascript");
    if (responseJSContent) {
        res.send(responseJSContent.replace(/apiKey:('|")*,/, `apiKey: '${appId}',`));
    } else {
        fs.readFile(path.join(__dirname, "../server") + '/lib/rendebug.js', 'utf8', (err,data) => {
            if(err) {
                console.log(err)
                res.sendStatus(204);
            } else {
                responseJSContent = data;
                res.send(responseJSContent.replace(/apiKey:('|")*,/, `apiKey: '${appId}',`));
            }
        })
    }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});


module.exports = app;
