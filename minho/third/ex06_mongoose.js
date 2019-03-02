const http = require('http');
const express = require('express');
const app = express();
let mongoose = require('mongoose');

app.set('port',process.env.PORT || 3000);

let database;
let UserSchema;
let UserModel;

function connectDB(){
    const databaseUrl = 'mongodb://localhost:27017/local';
    console.log('데이터베이스 연결을 시도합니다.');
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;

    database.on('error',console.error.bind(console,'connection error.'))
            .on('open',()=>{
                console.log('DB연결 성공!');
            }).on('disconnected',()=>{
                console.log('연결 실패')
                setTimeout(connectDB(),3000);
            });
};

let server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('오픈완료');
    connectDB();
});