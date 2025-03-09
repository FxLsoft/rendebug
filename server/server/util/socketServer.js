var ws = require("nodejs-websocket");

const connections = [];

var server = {
    init: function() {
        console.log("websocket 开始建立连接...");
        let regex = /^appKey:(\S+)$/;
        ws.createServer(function(conn) {
            connections.push(conn);
            var i = 0;
            conn.on("text", function(str) {
                // console.log(str);
                if (str && regex.test(str)) {
                    conn.__apiKey = str.match(regex)[1];
                }
                if (conn.__timeout) {
                    clearTimeout(conn.__timeout);
                }
                conn.__timeout = setTimeout(function () {
                    conn.sendText("server:" + ++i);
                }, 5000)
            });
            conn.on("close", function(code, reason) {
                console.log("websocket 关闭连接");
                for (let i = 0; i < connections.length; i++) {
                    if (connections[i] === conn) {
                        connections.splice(i , 1);
                    }
                }
            });
            conn.on("error", function(code, reason) {
                console.log("websocket 异常关闭");
                for (let i = 0; i < connections.length; i++) {
                    if (connections[i] === conn) {
                        connections.splice(i , 1);
                    }
                }
            });
        }).listen(3001);
        return connections;
    },
    sendText: function(text, apiKey) {
        for (let i = 0; i < connections.length; i++) {
            if (connections[i].__apiKey && connections[i].__apiKey === apiKey)
            connections[i].sendText(text);
        }
    }
};

module.exports = server;
