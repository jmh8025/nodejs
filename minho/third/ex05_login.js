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
const cookieParser = require('cookie-parser')();
const expressSession = require('express-session');
let db = null;

app.set('port', 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(cookieParser);
app.use(expressSession({
    secret:'my key',
    resave : true,
    saveUninitialized : true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/public', static(path.join(__dirname, 'public')));

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
    let users = db.collection('users');
    
    users.find({id:id, password:pwd}).toArray(function(err, docs) {
        if(err) {
            console.log('아이디 패스워드 검색 에러!', err);
            callback(err, null);
        }
        if(docs.length > 0) {
            console.log('아이패스워드 존재한다.');
            callback(null, docs);
        } else {
            console.log('사용자가 없다.');
            callback(null, null);
        }
    });
}

function addUser(db,newUser,callback){
    let users = db.collection('users');

    users.insertMany([newUser], (err,result)=>{
        if(err){
            callback(err,null);
            return;
        }
        
        if(result.insertedCount > 0){
            console.log('사용자 레코드 추가 성공 : ',result.insertedCount);
            callback(null,result);
        }else{
            console.log('새로 추가된 사용자가 없다.');
            callback(err,null);
        }
        callback(null);
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
                //session에 로그인 정보 저장
                req.session.user = {
                    userId : result[0].id,
                    userName : result[0].name,
                    authorize : true
                };
                req.app.render('login_ok',{docs:result},(err2,html)=>{
                    if(err2){
                        console.log('login_ok ejs 렌더링 에러',err2);
                        return;
                    }
                    res.end(html);
                });
            }else{
                console.log('login error!');
                res.redirect('/public/login.html');
            }
        });
    } else {
        console.log('db 접속 정보가 없다!');
        res.end('db connection error!')
    }
});

router.route('/process/logout').get(function(req, res){
    if(req.session.user){
        req.session.destroy((err)=>{
            if(err){
                console.log('박살실패',err);
                res.redirect('/public/login.html');
            }
            res.redirect('/public/login.html');
            console.log('박살완료');
        });
    }else{
        console.log('아직 로그인 안함');
    }
    res.redirect('/')
});

router.route('/process/adduser').post((req,res)=>{
    console.log('/process/adduser 요청 됨');
    let paramId= req.body.id || req.query.id;
    let paramPwd= req.body.password || req.query.password;
    let paramName= req.body.name || req.query.name;
    let newUser = {
        id:paramId,
        password:paramPwd,
        name:paramName
    }
    if(db){
        addUser(db, newUser, (err,result)=>{
            if(err){
                throw err;
            }
            if(result && result.insertedCount > 0){
                res.writeHead(200, {'Content-type':'text/html;charset=utf8'});
                res.write('<h1>사용자 추가 성공</h1>');
                res.write('<p><a href="/public/login.html">로그인</a></p>');
            }else{
                res.end('insert user - error!');
            };
        })
    }else{
        res.end('db connection error!');
    }
    console.log(newUser);
});

app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("http://localhost:%d", app.get('port'));
    dbConnection()
});
