//app.use() : 미들웨어 설정 할 때 사용되는 함수
//npm i express
const http = require("http");
const express = require("express");
const app = express();

app.set("port", 3000);

app.use(function(req, res, next){
    console.log("첫번째 미들웨어");
    res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
    res.write("<h1>첫번째 미들웨어 호출!</h1>");
    next(); //다음 미들웨어를 호출
});

app.use("/", function(req, res, next){
    console.log("두번째 미들웨어");
    res.write("<h2>두번째 미들웨어 호출!</h2>");
    res.end();
});

const server = http.createServer(app);
server.listen(app.get("port"), ()=>{
    console.log("http://localhsot:%d", app.get("port"));
});