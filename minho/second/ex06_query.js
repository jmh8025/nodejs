// app.use() : 미들웨어 설정할때 사용되는 함수 
// npm i express -save
const http = require('http');
const express = require('express');
const app = express();

app.set('port',3010);

app.get('/',function (req,res){
    console.log('헤더 요청 파라미터 확인');
    let userAgent = req.header('User-Agent');
    let paramName = req.query.name;
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write(`<h2>userAghksdf</h2>${userAgent}`);
    res.write(`<h2>userAghksdf</h2>${paramName}`);
    res.end();
})


const server = http.createServer(app);
server.listen(app.get('port'), ()=> {
    console.log('http://localhost:%d',app.get('port'));
}); 