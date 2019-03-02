//npm i cookie-parser
//쿠기를 사용하기 위해서 쿠키파서가 필요하다.
//쿠키는 클라이언트에 생성된다. res에 설정 -> req로 받는다.

const http = require("http");
const express = require("express");
const app = express();
const static = require("serve-static");
const path = require("path");
const router = express.Router();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ccc = cookieParser();

app.use(cors());

app.set("port", 3000);

app.use("/public", static(path.join(__dirname, "public")));
app.use(ccc);

router.route("/process/showCookie").get(function(req, res){
    res.send(req.cookies);
});
router.route("/process/setUserCookie").get(function(req, res){
    res.cookie("user",{
        id : "hs307",
        name : "한상민",
        authorized : true
    });
    res.redirect("/process/showCookie");
});

app.use("/", router);

const server = http.createServer(app);
server.listen(app.get("port"), (req, res)=>{
    console.log(`http://localhost:${app.get("port")}`);
});