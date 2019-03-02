//ex11_express_error_handler.js
//에러처리
//npm i express-error-handler

const http = require("http");
const express = require("express");
const app = express();
const static = require('serve-static');
const bodyParser = require("body-parser");
const router = express.Router();
const expressErrorHandler = require("express-error-handler");


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
    let paramName = req.params.name;
    let paramLocation = req.params.location;

    res.writeHead(200,{"content-type" : "text/html;charset=utf-8"});
    res.write(`<p> id : ${paramId}</p>`);
    res.write(`<p> pwd : ${paramPassword}</p>`);
    res.write(`<p> name : ${paramName}</p>`);
    res.write(`<p> location : ${paramLocation}</p>`);
    res.end();
});

app.use("/", router);

let errorHandler = expressErrorHandler({
    static : {
        "404" : __dirname+"/public/404.html"
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

const server = http.createServer(app);
server.listen(app.get("port"), ()=>{
    console.log(`http://localhost:${app.get("port")}`);
});