//ex02_express_server.js
//express 모듈로 서버 구현

var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
    res.end("<h2>최초페이지</h2>");
});

app.get("/login", function(req, res){
    res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
    res.end("<h2>로그인 페이지</h2>");
});
app.get("/user", function(req, res){
    res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
    res.end("<h2>사용자 페이지</h2>");
});

app.listen(3000, ()=>{
    console.log("http://localhost:3000");
})