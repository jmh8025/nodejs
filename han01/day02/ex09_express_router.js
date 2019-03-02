//ex09_express_router.js
//router 미들웨어 사용
//router 미들웨어는 서버 생성 직전에 등록해서 사용

const http = require("http");
const express = require("express");
const app = express();
const static = require('serve-static');
const bodyParser = require("body-parser");
const router = express.Router();


app.set("port", 3000);

//static 미들웨어 지정 - 외부에서 정적 파일에 바로 접근 가능
app.use("/public", static(__dirname+"/public"));

//post 요청 시 body에 저장된 요청 파라미터 사용
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.route("/process/login").post(function(req, res){
    console.log("process/login 요청 됨");

    let paramId = req.body.id;
    let paramPassword = req.body.password;
    res.writeHead(200,{"content-type" : "text/html;charset=utf-8"});
    res.write(`<p> id : ${paramId}</p>`);
    res.write(`<p> pwd : ${paramPassword}</p>`);
    res.end();
});

app.use("/", router);

const server = http.createServer(app);
server.listen(app.get("port"), ()=>{
    console.log(`http://localhost:${app.get("port")}`);
});