//npm i serve-static --save

const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');

app.set('port',3000);

app.use('/public',static(__dirname+'/public'));



const server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log(`http://localhost:${app.get('port')}`);
})