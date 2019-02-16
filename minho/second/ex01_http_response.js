var http = require('http');
var server = http.createServer();

server.listen(3000,()=>{
    console.log("http://localhost:%d",3000)
});

server.on('request',(req,res)=>{

    console.log('req요청 받음');
    res.writeHead(200,{'content-type':'text/html;charset=utf8'})
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>응답페이지</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>위대한 노드제이에스</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
})