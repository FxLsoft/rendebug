function testUndefined() {
    aler(12);
}

function testXhr() {
    let xhr = new XMLHttpRequest();
        xhr.open('POST', '/test', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            name: 123
        }));
}

function testPromise() {
    var promise = new Promise(function (resove, reject) {
        resove(123)
        // reject(123);
    });
    promise.then(function(res) {
        undefined.c
    }).catch(function (error) {
        console.log(error);
    });
}

if(window.WebSocket){
    var ws = new WebSocket('ws://127.0.0.1:3001');

    ws.onopen = function(e){
        console.log("连接服务器成功");
        ws.send("game1");
    }
    ws.onclose = function(e){
        console.log("服务器关闭");
    }
    ws.onerror = function(){
        console.log("连接出错");
    }
    var i = 0;
    ws.onmessage = function(e){
        console.log(e.data);
        ws.send('client -> ' + ++i);
    }
}
