const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const cookieParser = require('cookie-parser')();

app.set('port', 3000);
app.use(cookieParser);

router.route('/process/showCookie').get(function(req, res){
    console.log('/process/showCookie 호출');
    res.send( req.cookies );
});
router.route('/process/setUserCookie').get(function(req, res){
    //쿠키는 클라이언트에 설정된다. res에 설정 -> req로 받는다.
    res.cookie('user',{
        id:'jmh8025',
        name:'전민호2',
        authorized:true
    });
    res.redirect('/process/showCookie')
});

router.route('/').get(function(req, res){
    
    res.end('<h1>22</h1>')
});

app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("http://localhost:%d", app.get('port'));
});
