const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const path = require('path');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

var mongoose = require('mongoose');

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use('/public', static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));

var db;
var UserSchema;
var UserModel;

function connectDB() {
    var databaseUrl = 'mongodb://localhost:27017/local';
    
    console.log('데이터베이스 연결을 시도합니다.');
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'connection error.'));
    db.on('open', function() {
        console.log('DB에 연결됨... %s', databaseUrl);
        UserSchema = mongoose.Schema({
            id : String,
            name : String,
            password : String
        });
        console.log('유저 스키마 정의');

        //UserModel 클래스를 만들어 준다
        //UserModel의 인스턴스 생성 후 사용하거나
        //UserModel이 제공하는 static 함수를 사용할수도 있다.
        UserModel = mongoose.model('users',UserSchema);
        console.log('유저 모델 정의');
    });
    
    // 연결끊어지면 connectDB() 재귀호출
    db.on('disconnected', function() {
        console.log('연결이 끊어져서 5초후 다시 연결 시도.');
        setTimeout(connectDB, 5000);
    });
}



// 사용자 추가 함수
function addUser(db, newUser, callback) {
    var user = new UserModel(newUser);
    user.save((err)=>{
        if(err){
            console.log('디비저장 에러',err);
            callback(err,null);
            return;
        }
        console.log('사용자 데이터 추가 성공');
        callback(null,user);
    })
}

function authUser(userInfo,callback){
    UserModel.find({id:userInfo.id,password:userInfo.pw},(err,result)=>{
        if(err){
            console.log('find 에러', err);
            callback(err,null);
        }else{
            callback(null,result);
        }
    })
}

router.route('/process/login').post(function(req,res){
    console.log('/process/login 요청 됨');
    let paramId = req.body.id || req.query.id;
    let paramPwd = req.body.password || req.query.password;
    let userInfo = {
        id : paramId,
        pw : paramPwd
    }
    authUser(userInfo,(err,result)=>{
        if(err){
            console.log('로그인 실패',err);
            res.redirect('/public/login.html');
        }
        req.app.render('login_ok',{user:result[0]},(err2,html)=>{
            if(err2){
                console.log('login_ok ejs 렌더링 에러',err2);
                return;
            }
            res.end(html);
        });
    });
})





// /process/adduser
router.route('/process/adduser').post(function(req, res) {
    console.log('/process/adduser 요청 됨');
    var paramId = req.body.id || req.query.id;
    var paramPwd = req.body.password || req.query.password;
    var paramName = req.body.name || req.query.name;
    
    var newUser = {
        id:paramId,
        password:paramPwd,
        name:paramName
    }
    if(db) {
        addUser(db, newUser, function(err, user) {
            if(err){
                throw err;
            }
            if(user){
                res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
                res.write('<h2>사용자 추가 성공</h2>');
                res.write('<h3>사용자명'+paramName+'</h2>');
                res.end();
            }else{
                res.end('insert user failed');
            };
        });
    } else {
        res.end('db connection error!');
    }
});

app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("http://localhost:%d", app.get('port'));
    connectDB();
});