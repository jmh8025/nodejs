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
var userSchema;
var userModel;

function connectDB() {
    var databaseUrl = 'mongodb://localhost:27017/local';
    
    console.log('데이터베이스 연결을 시도합니다.');
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'connection error.'));
    db.on('open', function() {
        console.log('DB에 연결됨... %s', databaseUrl);

        //스키마 선언
        userSchema = mongoose.Schema({
            id : String,
            name : String,
            password : String
        });
        console.log("userSchema 정의함", userSchema);

        //userModel 클래스를 만들어 준다.
        //userModel의 인스턴스 생성 후 사용하거나
        //userModel이 제공하는 static함수를 사용할 수도 있다.
        userModel = mongoose.model("users", userSchema);
        console.log("userModer 정의함", userModel);
    });
    
    // 연결끊어지면 connectDB() 재귀호출
    db.on('disconnected', function() {
        console.log('연결이 끊어져서 5초후 다시 연결 시도.');
        setTimeout(connectDB, 5000);
    });
}

// 사용자 추가 함수
function addUser(newUser, callback) {
    //userModel 인스턴스 생성
    let user = new userModel();
    
    user.save(function(err){
        if(err){
            callback(err, null);
            return;    
        }
        console.log("사용자 데이터 추가 성공!");
        callback(null, user);
    });
}

function authUser(paramId, paramPwd, callback){
    //userModel 클래스의 find() 함수 사용.
    userModel.find({id: paramId, password : paramPwd}, function(err, results){
        if(err){
            callback(err, null);
            return;
        }
        console.log("사용자 검색 성공!");
        console.dir(results);
        if(results.length > 0){
            console.log("사용자 검색 성공!");
            callback(null, results);
        }else{
            console.log("사용자 검색 실패!");
            callback(null, null);
        }
    });
}

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
        addUser(newUser, function(err, user) {
            if(err){
                throw err;
            }
            if(user){
                res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
                res.write("<h2>insert user successed!</h2>");
                res.write("<h3>inserted user" + paramName + "</h3>");
                res.end();
            }else{
                res.end("insert user failed!");
            }
        });
    } else {
        res.end('db connection error!');
    }
});

router.route("/process/login").post(function(req, res){
    console.log("/process/login 요청됨");

    var paramId = req.body.id;
    var paramPwd = req.body.password;
    
    console.log("id : %s", paramId);
    console.log("pwd : %s", paramPwd);

    authUser(paramId, paramPwd, function(err, result){
        req.app.render("loginOk", {docs : result}, function(err2, html){
            if(err2){
                console.log("loginOk ejs 호출 실패");
                return;
            }
            res.end(html);
        });
    });

});

app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("http://localhost:%d", app.get('port'));
    connectDB();
});