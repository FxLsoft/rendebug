(function (win) {
    let serverUrl = '//ren-debug.chime.me/event';

    function isString (obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    }
    function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
    function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    }
    function deepCopy(obj) {
        var result = Array.isArray(obj) ? [] : {};
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (isObject(obj[key]) === 'object') {
                result[key] = deepCopy(obj[key]);   //递归复制
            } else if (isFunction(obj[key])) {
                continue
            } else {
                result[key] = obj[key];
            }
          }
        }
        return result;
    }
    if (typeof Object.assign != 'function') {
        // Must be writable: true, enumerable: false, configurable: true
        Object.defineProperty(Object, "assign", {
          value: function assign(target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
              throw new TypeError('Cannot convert undefined or null to object');
            }
      
            var to = Object(target);
      
            for (var index = 1; index < arguments.length; index++) {
              var nextSource = arguments[index];
      
              if (nextSource != null) { // Skip over if undefined or null
                for (var nextKey in nextSource) {
                  // Avoid bugs when hasOwnProperty is shadowed
                  if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }
            }
            return to;
          },
          writable: true,
          configurable: true
        });
    }
    if (typeof Array.prototype.forEach != "function") {
        Array.prototype.forEach = function (fn, context) {
          for (var k = 0, length = this.length; k < length; k++) {
            if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
              fn.call(context, this[k], k, this);
            }
          }
        };
    }
    /**
     * unhandledrejection Promise拒绝错误
     */
    win.addEventListener('unhandledrejection', function (event) {
        let errorInfo = {
            type: 'unhandledrejection',
            name: 'unhandledrejection',
            message: event.reason
        }
        Object.assign(errorInfo, formateError(event.error));
        sendError('unhandledrejection', errorInfo);
    });

    /**
     * uncaught JS错误或者 console.error 
     */
    win.onerror = function (message, fileName, lineNumber, columnNumber, error) {
        if (columnNumber === undefined && win.event) {
            columnNumber = win.event.errorCharacter;
        }
        fileName = fileName || win.location.href;
        let errorInfo = {
            message,
            lineNumber,
            columnNumber,
            fileName,
            name: 'Uncaught Error',
            stacktrace: (error && error.stack) || (function () {
                let e, t, r = [];
                try {
                    t = arguments.callee.caller.caller;
                } catch (i) {
                    t = "";
                }
                for (; t && r.length < 10;) {
                    let n = t.toString().match(/function\s*([\w\_$]+)?\s*\(/i);
                    (e = (n && n[1]) || "[anonymous]"), r.push(e), (t = t.caller);
                }
                return "generated-stack:" + r.join("\n");
            })(),
            severity: 'Error',
            type: 'Uncaught'
        }
        sendError('Uncaught', errorInfo);
    };

    /**
     * ResourceError
     */
    win.addEventListener('error', function (event) {
        let target = event.target ? event.target : event.srcElement;
        let outerHTML = target && target.outerHTML;
        outerHTML = outerHTML && outerHTML.length > 200 ? outerHTML.slice(0, 200) : outerHTML;
        let errorInfo = {
            target: {
                outerHTML,
                src: target && target.src,
                tagName: target && target.tagName,
                id: target && target.id,
                name: target && target.name,
                className: target && target.className,
                type: target && target.type,
                XPath: (function (e) {
                    let t = [];
                    for (; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
                        let r, n = 0, flag = false;
                        for (r = e.previousSibling; r; r = r.previousSibling)
                            r.nodeType != Node.DOCUMENT_TYPE_NODE && r.nodeName == e.nodeName && ++n;
                        for (r = e.nextSibling; r && !flag; r = r.nextSibling) {
                            if (r.nodeName == e.nodeName) {
                                flag = true;
                            }
                        }
                        let o = (e.prefix ? e.prefix + ":" : "") + e.localName, x = n || flag ? "[" + (n + 1) + "]" : "";
                        t.splice(0, 0, o + x);
                    }
                    return t.length ? "/" + t.join("/") : null;
                })(target)
            },
            message: event,
        }
        Object.assign(errorInfo, formateError(event.error));
        sendError('ResourceError', errorInfo);
    });

    /**
     * WebSocket 错误
     */
    (function () {
        if (!("WebSocket" in win)) return;
        let onerror = Object.getOwnPropertyDescriptor(
            WebSocket.prototype,
            "onerror"
        );
        if (!onerror.configurable) return;
        Object.defineProperty(WebSocket.prototype, "onerror", {
            set: function () {
                try {
                    let r = arguments[0];
                    return onerror.set.apply(this, [
                        function (e) {
                            let errorInfo = {
                                type: "WebsocketError",
                                message: 'WebsocketError',
                                target: {
                                    type: "onerror",
                                    url: e.target.url,
                                    timeStamp: e.timeStamp
                                }
                            };
                            r.apply(this, arguments);
                            sendError('WebsocketError', errorInfo);
                        }
                    ]);
                } catch (e) {
                    return onerror.set.apply(this, arguments);
                }
            }
        });
    })();

    /**
     * HttpError 对 XMLHttpRequest 、fetch 处理
     */
    (function () {
        if (win.XMLHttpRequest && win.XMLHttpRequest.prototype) {
            let tType, tUrl, openTime, xhr = XMLHttpRequest.prototype, open = xhr.open, send = xhr.send;
            xhr.open = function (type, url) {
                try {
                    tType = type;
                    tUrl = url;
                    openTime = new Date().getTime();
                    open.apply(this, arguments);
                } catch (error) {
                    open && open.apply(this, arguments);
                }
            };
            xhr.send = function () {
                let _self = this, onreadystatechange = _self.onreadystatechange;
                let request = arguments && arguments[0];
                _self.onreadystatechange = function () {
                    try {
                        if (4 === _self.readyState && !_self.Rendebug && tUrl !== serverUrl && !(_self.status >= 200 && _self.status < 300)) {
                            let time = new Date().getTime() - openTime;
                            let errorInfo = {
                                method: tType,
                                url: _self.responseURL || tUrl,
                                status: _self.status,
                                statusText: _self.statusText,
                                responseText: _self.responseText,
                                requestText: request,
                                elapsedTime: time,
                                time: openTime,
                                message: '请求失败'
                            }
                            sendError('XMLHttpRequest', errorInfo);
                        }
                    } catch (error) {
                        
                    }
                    onreadystatechange && onreadystatechange.apply(_self, arguments);
                }
                send.apply(this, arguments);
            }
        }
    })();

    /**
     * 对 Promise.catch 进行侵入
     */
    (function () {
        if (win.Promise && win.Promise.prototype) {
            Promise.prototype['catch'] = function(onRejected) {
                const reject = function (error) {
                    var errorInfo = {
                        message: 'Promise Catch 捕获'
                    }
                    Object.assign(errorInfo, formateError(error))
                    sendError('Promise', errorInfo);

                    if (isFunction(onRejected)) {
                        return onRejected(error);
                    }
                }
                return this.then(null, reject);
            }
        }
    })();

    // 格式化错误
    function formateError(error) {
        let errorInfo = {};
        if (Object.prototype.toString.call(error) === '[object Error]') {
            errorInfo = {
                name: error.name,
                message: error.message,
                stack: error.stack,
            }
            var reg = /(http\S*):(\d+):(\d+)/g;
            var matcher = reg.exec(error.stack);
            if (matcher) {
                Object.assign(errorInfo, {
                    fileName: matcher[1],
                    lineNumber: +matcher[2],
                    columnNumber: +matcher[3]
                })
            }
        } else {
            errorInfo = deepCopy(error);
        }
        Object.keys(errorInfo).forEach(key => {
            if (isObject(errorInfo[key])) {
                errorInfo[key] = JSON.stringify(errorInfo[key], null, 4);
            }
        })
        return errorInfo;
    }

    // 行为记录
    const Action = {
        limit: 6,
        list: [],
        eventCount: 0,
        setAction(action) {
            Action.list.push(action);
            if (Action.list.length > Action.limit) {
                Action.list.splice(0, 1);
            }
            ++Action.eventCount;
        }
    }

    // 点击事件绑定 用于行为监督
    function clickEvent(event) {
        let target = event.target ? event.target : event.srcElement;
        let outerHTML = target && target.outerHTML;
        outerHTML = outerHTML && outerHTML.length > 200 ? outerHTML.slice(0, 200) : outerHTML;
        let eventInfo = {
            type: 'click',
            page: {
                url: win.location.href,
                title: document.title
            },
            detail: {
                outerHTML: outerHTML,
                tagName: target && target.tagName,
                id: target && target.id,
                name: target && target.name,
                className: target && target.className,
                type: target && target.type,
            },
            time: new Date().getTime()
        };
        Action.setAction(eventInfo);
    };
    win.addEventListener ? win.addEventListener("click", clickEvent, true) : document.attachEvent("onclick", clickEvent);

    // 监听路由变化 用于行为监控
    (function routerChange() {
        let router = {
            url: win.location.href
        }
        let initRouter = function () {
            router = {
                url: win.location.href,
                title: document.title
            };
        }
        let logRouter = function (from, to) {
            let info = {
                type: 'Navigation',
                detail: {
                    from,
                    to: (router = to)
                },
                time: new Date().getTime()
            }
            Action.setAction(info);
        }
        document.addEventListener ? document.addEventListener("DOMContentLoaded", initRouter) : document.attachEvent("onreadystatechange", initRouter);
        let onpopstate = win.onpopstate;
        // 添加和修改历史记录中的条目
        win.onpopstate = function () {
            let r = {
                url: win.location.href,
                title: document.title
            }
            if ((router.title || (router.title = document.title), router.url !== r.url && logRouter(router, r), onpopstate)) {
                return onpopstate.apply(this, arguments);
            }
        }
        let pushState = win.history.pushState;
        win.history.pushState = function () {
            router = {
                url: win.location.href,
                title: document.title
            }
            var e = {};
            if ((3 === arguments.length && (e.url = arguments[2]), router.url !== e.url && logRouter(router, e), pushState)) {
                return pushState.apply(this, arguments);
            }
        }
        let onhashchange = win.onhashchange;
        // onhashchange 事件在当前 URL 的锚部分(以 '#' 号为开始) 发生改变时触发
        win.onhashchange = function () {
            var e = {
                url: win.location.href,
                title: document.title
            }
            if ((router.url !== e.url && logRouter(router, e), onhashchange)) {
                return onhashchange.apply(this, arguments);
            }
        }
    })();

    // 日志
    ["log", "warn", "error", "debug", "info"].forEach(key => {
        let t = console[key];
        let logEvent = function () {
            t.apply(this, arguments);
            if (key === 'error') {
                var errorInfo = formateError(arguments[0]);
                if (isString(errorInfo)) {
                    errorInfo = {
                        message: errorInfo
                    }
                } else if (isObject(errorInfo)) {
                    Object.assign({ message: 'console error' }, errorInfo);
                } else {
                    errorInfo = {
                        message: 'console error',
                        info: errorInfo
                    }
                }
                sendError('Console error', errorInfo);
            }
        }
        console[key] = logEvent;
    });

    function sendError(type, detail) {
        let info = {
            version: "1.0",
            userAgent: win.navigator.userAgent,
            locale: win.navigator.language || win.navigator.userLanguage,
            url: win.location.href,
            title: document.title,
            appVersion: '',
            apiKey: '',
            time: new Date().getTime(),
            type: type,
            detail: detail,
            actionInfo: Action.list,
            eventCount: Action.eventCount,
            custom: {}
        };

        // 用户自定义字段
        if (isObject(win.__rendebugCustomFields)) {
            const fields = win.__rendebugCustomFields;
            Object.keys(fields).forEach(key => {
                if (fields[key] && isString(fields[key])) {
                    const keys = fields[key].split('.');
                    let value = win;
                    keys.forEach(k => {
                        if (value) {
                            value = value[k];
                        }
                    })
                    if (['String', 'Array', 'Number', 'Date'].indexOf(Object.prototype.toString.call(value).slice(8, -1)) > -1) {
                        info.custom[key] = value;
                    }
                }
            })
        }
        new Image().src = serverUrl + "?event=" + encodeURIComponent(JSON.stringify(info));
        // if (win.XMLHttpRequest && win.atob) {
        //     let xhr = new XMLHttpRequest();
        //     xhr.Rendebug = true;
        //     xhr.open('POST', serverUrl);
        //     xhr.setRequestHeader('Content-Type', 'application/json');
        //     xhr.send(JSON.stringify(info));
        // } else {
        //     new Image().src = serverUrl + "?event=" + encodeURIComponent(JSON.stringify(info));
        // }
    };
})(window)