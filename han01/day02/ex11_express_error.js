//ex11_express_error.js
//에러처리
//app.all()

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
    let paramName = req.params.name;
    let paramLocation = req.params.location;

    res.writeHead(200,{"content-type" : "text/html;charset=utf-8"});
    res.write(`<p> id : ${paramId}</p>`);
    res.write(`<p> pwd : ${paramPassword}</p>`);
    res.write(`<p> name : ${paramName}</p>`);
    res.write(`<p> location : ${paramLocation}</p>`);
    res.end();
});

router.route("*").get(function(req, res){
    res.status(404).send("<h1>시부럴</h1>")
});

app.use("/", router);

app.all("*", (req, res)=>{
    res.status(404).send("<h1>없는 페이지다. 똑바로 쳐라.</h1>")
});

const server = http.createServer(app);
server.listen(app.get("port"), ()=>{
    console.log(`http://localhost:${app.get("port")}`);
});