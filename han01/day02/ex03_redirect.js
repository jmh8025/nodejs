//app.use() : 미들웨어 설정 할 때 사용되는 함수
//npm i express
const http = require("http");
const express = require("express");
const app = express();

app.set("port", 3000);

app.use(function(req, res, next){
    res.redirect("http://www.google.com");
});

const server = http.createServer(app);
server.listen(app.get("port"), ()=>{
    console.log("http://localhsot:%d", app.get("port"));
});