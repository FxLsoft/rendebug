"use strict";function testUndefined(){aler(12)}function testXhr(){var n=new XMLHttpRequest;n.open("POST","/test",!0),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify({name:123}))}function testPromise(){new Promise(function(n,e){n(123)}).then(function(n){(void 0).c}).catch(function(n){console.log(n)})}if(window.WebSocket){var ws=new WebSocket("ws://127.0.0.1:3001");ws.onopen=function(n){console.log("连接服务器成功"),ws.send("game1")},ws.onclose=function(n){console.log("服务器关闭")},ws.onerror=function(){console.log("连接出错")};var i=0;ws.onmessage=function(n){console.log(n.data),ws.send("client -> "+ ++i)}}
//# sourceMappingURL=test.js.map
