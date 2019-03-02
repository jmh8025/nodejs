// sat03_ex05_login.js
const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const path = require('path');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

app.set('port', 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use('/public', static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret : "mncapro",
    resave : true,
    saveUninitialized : true
}));


var db;
function dbConnection() {
    var dbUrl = "mongodb://localhost";
    
    MongoClient.connect(dbUrl, function(err, client) {
        if(err) {
            console.log('db연결 실패>>> ', err);
            return;
        }
        db = client.db('local');
        console.log('db 연결 됨.');
    });
}

function authUser(db, id, pwd, callback) {
    var users = db.collection('users');
    
    users.find({id:id, password:pwd}).toArray(function(err, docs) {
        if(err) {
            console.log('아이디 패스워드 검색 에러!', err);
            callback(err, null);
        }
        if(docs.length > 0) {
            console.log('아이디, 패스워드 존재한다.');
            callback(null, docs);
        } else {
            console.log('사용자가 없다.');
            callback(null, null);
        }
    });
}
function addUser(db, newUser, callback){
    var users = db.collection("users");
    users.insertMany([newUser], function(err, result){
        if(err){
            callback(err, null);
            return;
        }
        console.log("result : ", result.insertedCount);
        if(result.insertedCount > 0){
            console.log("사용자 추가 성공 : ", result.insertedCount);
        }else{
            console.log("추가된 사용자 없음");
        }
        callback(null, result);
    });
}

router.route('/process/login').post(function(req, res){
    console.log('/process/login 요청 됨');
    
    var paramId = req.body.id;
    var paramPwd = req.body.password;
    
    if(db) {
        authUser(db, paramId, paramPwd, function(err, result) {
            if(err) {
                console.log('error>>>', err);
                return;
            }
            if(result){
                req.app.render("loginOk", {docs : result} ,function(err2, html){
                    req.session.user = {
                        id : result[0].id,
                        name : result[0].name,
                        authorized : true
                    }
                    console.log(result);
                    res.end(html);
                });
            }else {
                res.redirect("/public/login.html");
                console.log("로그인 에러");
            }
            
            // result가 있다면 로그인 정보가 있다.
            /*if(result) {
                var userName = result[0].name;
                req.session.user = {
                    id : result[0].id,
                    name : result[0].name,
                    authorized : true
                }
                res.writeHead(200, {'Content-type':"text/html;charset=utf8"});
                res.end('userName => '+ userName);
            } else {
                res.end('login error!');
            }*/
        });
    } else {
        console.log('db 접속 정보가 없다!');
        res.end('db connection error!')
    }
});

router.route("/process/logout").get(function(req, res){
    if(req.session.user){
        req.session.destroy(function(err){
            if(err){
                console.log("세션 박살 에러 : ", err);
            }else{
                console.log("박살 성공");
                res.redirect("/public/login.html");
            }
        });
    }else{
        console.log("로그인 상태 아님");
    }
});

router.route("/process/addUser").post(function(req, res){
    console.log("process/addUser 로 요청됨");
    var paramId = req.body.id || req.query.id;
    var paramPwd = req.body.password || req.query.password;
    var paramName = req.body.name || req.query.name;

    var newUser = {
        id : paramId,
        password : paramPwd,
        name : paramName
    }
    console.log(newUser);

    if(db){
        addUser(db, newUser, function(err, result){
            if(err){
                console.log("insert 에러", err);
                throw err;
            }
            if(result && result.insertedCount > 0){
                res.writeHead(200, {'Content-type':"text/html;charset=utf8"});
                res.end('<p><a href="/public/login.html">로그인</a></p>');
            }else{
                res.end("insert user error");
                console.log("insert user error");
            }
        });
    }else{
        console.log("DB CONNECTION ERROR");
    }
    
});

app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("http://localhost:%d", app.get('port'));
    dbConnection()
});
