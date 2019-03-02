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
const multer = require("multer");

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

var storage = multer.diskStorage({
    destination : function(req, file, callback){
        callback(null, "upload");
    },
    filename : function(req, file, callback){
        callback(null, file.originalname + Date.now());
    }
});

var upload = multer({
    storage : storage,
    limits : {
        files : 10,
        fileSize : 1024*1024*1024
    }
});

console.log(upload.array("photo", 1));

router.route("/process/photo").post(upload.array("photo", 1), function(req, res){
    try{
        var files = req.files;
        console.dir(req.files[0]);
        res.send(req.files[0]);
    }catch(exept){
        console.log(exept.stack);
    }
});

app.use("/", router);

const server = http.createServer(app);
server.listen(app.get("port"), (req, res)=>{
    console.log(`http://localhost:${app.get("port")}`);
});