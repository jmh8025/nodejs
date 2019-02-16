var http = require('http');
var server = http.createServer();

// 서버와 이벤트 리스너 : request,connection,close
server.on('connection', function(socket){
    console.log('connection ok');
    console.dir(socket);
});

server.on('close',()=>{
    console.log('close');
});
server.on('request',(req,res)=>{

    console.log('req요청 받음');
    res.writeHead(200,{'content-type':'text/html;charset=utf8'})
    res.end('<h1>엠엠엠ㅇ멩메엔씨</h1>')
})
server.listen(3000,()=>{
    console.log("http://localhost:%d",3000)
});