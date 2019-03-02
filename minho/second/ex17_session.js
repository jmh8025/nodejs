const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const path = require('path');
const router = express.Router();
const cookieParser = require('cookie-parser')();
const expressSession = require('express-session');
const bodyParser = require('body-parser');


app.set('port', 3000);
app.set('views',path.join(__dirname+'/views'));
app.set('view engine','ejs');
app.use(cookieParser);
app.use(expressSession({
    secret:'my key',
    resave : true,
    saveUninitialized : true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/public',static(path.join(__dirname,'/public')));


router.route('/process/login').post(function(req, res){
    var paramId = req.body.id;
    var paramPwd = req.body.password;
    if(req.session.user){
        res.end('<p>이미 로그인되어있다!!</p>');
    }else{
        req.session.user = {
            id : paramId,
            name : '전민호',
            authorized : true
        }
    }
    res.end('<p><a href="/process/product">product page</a></p>')
});

router.route('/process/logout').get((req,res)=>{
    console.log('/process/logout');
    if(req.session.user){
        req.session.destroy(function(err){
            if(err){
                throw err;
            }
            console.log('세션을 삭제하고 로그아웃 되었습니다.');
        });
    }
    res.redirect('/public/login.html');
});

router.route('/process/product').get(function(req, res){
    if(req.session.user === undefined){
        console.log('먼저 로그인하세요!. 로그인페이로 이동합니다......!');
        res.redirect('/public/login.html');
    }else{
        //로그인이 되면 보여준다.
        req.app.render('product',{'user':{'name' : 'Jeo2n'}},(err,html)=>{
            if(err){
                console.log('err',err)
                return;
            }
            res.end ( html );
        });
    }
});



app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("http://localhost:%d", app.get('port'));
});