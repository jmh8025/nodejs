var http = require('http');
var express = require('express');
var app = express();
app.set('port',3000);


var server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('http://localhost:3000');
});