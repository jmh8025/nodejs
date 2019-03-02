//ex07_express_static.js
//static 미들웨어 사용
//npm i serve-static
//npm i body-parser

const http = require("http");
const express = require("express");
const app = express();
const static = require('serve-static');
const bodyParser = require("body-parser");


app.set("port", 3000);

//static 미들웨어 지정 - 외부에서 정적 파일에 바로 접근 가능
app.use("/public", static(__dirname+"/public"));

//post 요청 시 body에 저장된 요청 파라미터 사용
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post("/process/login", function(req, res){
    console.log("process/login 요청 됨");

    let paramId = req.body.id;
    let paramPassword = req.body.password;
    res.writeHead(200,{"content-type" : "text/html;charset=utf-8"});
    res.write(`<p> id : ${paramId}</p>`);
    res.write(`<p> pwd : ${paramPassword}</p>`);
    res.end();
});

const server = http.createServer(app);
server.listen(app.get("port"), ()=>{
    console.log(`http://localhost:${app.get("port")}`);
});