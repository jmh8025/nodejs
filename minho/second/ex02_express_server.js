var express = require('express');
var app = express();

app.get('/', (req,res) => {
    res.writeHead(200, {'content-type':'text/html;charset=utf-8'});
    res.end('<h2>민호의 홈페이지</h2>');
});

app.get('/user', (req,res) => {
    res.writeHead(200, {'content-type':'text/html;charset=utf-8'});
    res.end('<h2>민호의 홈페이지2</h2>');
})

app.get('/login', (req,res) => {
    res.writeHead(200, {'content-type':'text/html;charset=utf-8'});
    res.end('<h2>민호의 홈페이지3</h2>');
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
});