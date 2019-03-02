//session
//로그인 페이지 구현
//npm i express-session
const http = require("http");
const express = require("express");
const app = express();
const static = require("serve-static");
const path = require("path");
const router = express.Router();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const bodyParser = require("body-parser");


app.set("port", 3000);
app.set("views", path.join(__dirname+"/views"));
app.set("view engine", "ejs");


app.use(cors());
app.use("/public", static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(expressSession({
    secret : "mncapro",
    resave : true,
    saveUninitialized : true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.route("/process/product").get(function(req, res){
    console.log("/process/product 요청 됨");
    if(req.session.user === undefined){
        console.log("로그인 부터");
        res.redirect("/public/login.html");
    }else{
        req.app.render("product", {"user" : {"name" : "한상민"}}, function(err, html){
            if(err){
                console.log("err", err);
                return false;
            }
            res.end(html);
        });
    }
    
});
router.route("/process/login").post(function(req, res){
    console.log("/process/login 요청 됨");
    if(req.session.user){
        console.log("로그인 되어있음");
        res.redirect("/process/product");
    }
    var paramId = req.body.id;
    var paramPwd = req.body.password;
    req.session.user = {
        id : paramId,
        name : "한상민",
        authorized : true
    }
    res.end("<script>location.href='/process/product'</script>");
});
router.route("/process/logout").get(function(req, res){
    console.log("/process/logout 요청 됨");
    if(req.session.user){
        req.session.destroy(function(err){
            if(err){
                throw err;
            }
            console.log("세션 파괴");
        });
    }
    res.redirect("/public/login.html");
    
});
app.use("/", router);

const server = http.createServer(app);
server.listen(app.get("port"), (req, res)=>{
    console.log(`http://localhost:${app.get("port")}`);
});