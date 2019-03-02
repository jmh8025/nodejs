//app.use() : 미들웨어 설정 할 때 사용되는 함수
//npm i express
const http = require("http");
const express = require("express");
const app = express();

app.set("port", 3000);

/*app.use(function(req, res, next){
    console.log("헤더 요청 파라미터 확인");

    let userAgent = req.header("User-Agent");
    let paramName = req.query.name;

    res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
    res.write(`<h1>User-Agent : ${userAgent}</h1>`);
    res.write(`<h2>paramName : ${paramName}</h2>`);
    res.end();

});*/
app.get("/",function(req, res){
    console.log("헤더 요청 파라미터 확인");

    let userAgent = req.header("User-Agent");
    let paramName = req.query.name;

    res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
    res.write(`<h1>User-Agent : ${userAgent}</h1>`);
    res.write(`<h2>paramName : ${paramName}</h2>`);
    res.end();

});

const server = http.createServer(app);
server.listen(app.get("port"), ()=>{
    console.log("http://localhsot:%d", app.get("port"));
});