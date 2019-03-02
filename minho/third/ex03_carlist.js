var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var static = require('serve-static');
var router = express.Router();

app.set('port',3000);
app.use('/public',static(path.join('public')));


router.route('/car_list').get((req,res)=>{
    console.log('car_list요청됨');
});

app.use('/',router);


var server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('http://localhost:3000');
});