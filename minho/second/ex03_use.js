// app.use() : 미들웨어 설정할때 사용되는 함수 
// npm i express -save
const http = require('http');
const express = require('express');
const app = express();

app.set('port',3000);

app.use(function (req,res,next){
    console.log('첫번째 미들웨어');
    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.write('<h1>첫번째 미들웨어 호출!</h1>');
    next();
})

app.use('/', function(req,res,next){
    console.log('두번째 미들웨어');
    res.write('<h1>두번째 미들웨어 호출!</h1>')
    res.end();
})

const server = http.createServer(app);
server.listen(app.get('port'), ()=> {
    console.log('http://localhost:%d',app.get('port'));
});