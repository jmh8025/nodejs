//app.js 페이지
//ejs 뷰엔진 설정
//npm i ejs

const http = require("http");
const express = require("express");
const app = express();
const static = require("serve-static");
const path = require("path");
const router = express.Router();
const cors = require("cors");
const ejs = require("ejs");

app.use(cors());

app.set("port", 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

var test = require("./router/test.js");

app.use("/public", static(path.join(__dirname, "public")));
test.test2(router);

// router.route("/").get(function(req, res){
//     test.test(req, res);
// });

app.use("/", router);

const server = http.createServer(app);
server.listen(app.get("port"), (req, res)=>{
    console.log(`http://localhost:${app.get("port")}`);
});