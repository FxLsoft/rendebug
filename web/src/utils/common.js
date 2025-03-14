
/**
 * @param time 时间戳
 * @return '2019-01-07'
 */

const fmtDate = (date, fmt) => {
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
}
export function getMonthAndDay(time) { // 时间戳转换 ’yy/mm‘ 
    if (time) {
        let date = fmtDate(new Date(parseInt(time)), 'yyyy-MM-dd')
        return date.split('-')[1] + "/" + date.split('-')[2]
    }
}

export function getTimeByUtc(time, isTimeStemp) {
    let date = new Date(time)
    if (isTimeStemp) return date.getTime()

    let year = date.getFullYear()
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    let day = (date.getDate() + 1) < 10 ? '0' + date.getDate() : date.getDate()
    return `${year}-${month}-${day}`
}

export function formatTimeStamp(timeStamp, format = 'yyyy-MM-dd') {
    const d = new Date(timeStamp)
    return fmtDate(d, format)
}

export function getLastHourStr (time) {    //时间戳转换 'yyyy-MM-dd hh:mm'
    return fmtDate(new Date(parseInt(time)), 'yyyy-MM-dd hh:mm');
}
