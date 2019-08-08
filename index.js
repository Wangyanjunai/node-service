const http = require('http')
const url = require('url')
const path = require('path')

const server = http.createServer(function (req, res) {
    const pathname = url.parse(req.url).pathname;
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    if (pathname === '/') {
        res.end(JSON.stringify({"index": "欢迎来到首页"}));
    } else if (pathname === '/health' || pathname === '/health.json') {
        res.end(JSON.stringify({"status": "UP"}));
    } else {
        res.end("404");
    }
});
server.listen(8060, function () {
    console.log("listening on localhost 8060");
})
