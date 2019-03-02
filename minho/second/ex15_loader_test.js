const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const path = require('path');
const router = express.Router();

app.set('port', 3000);
app.set('views',path.join(__dirname+'/views'));
app.set('view engine','ejs');
var test2 = require('./router/test2.js');

//이부분의 처리가 test2.js에서 실행 되도록 해보세욘! 
test2.test2(router)

app.use('/public', static(path.join(__dirname, 'public')));


app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("http://localhost:%d", app.get('port'));
});
