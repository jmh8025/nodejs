const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const path = require('path');
const router = express.Router();

app.set('port', 3000);

app.use('/public', static(path.join(__dirname, 'public')));

router.route('/').get(function(req, res){
    console.log('/ 요청');
    
    res.writeHead(200, {'Content-type':"text/html;charset=utf8"});
    res.write('<h1>Hello world</h1>');
    res.end();
});

app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("http://localhost:%d", app.get('port'));
});