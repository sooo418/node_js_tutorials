const http = require('http'); //애플리케이션이 구동되기 위해서는 'http'라는 모듈이 필요하다

const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello World\n');
});
server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});