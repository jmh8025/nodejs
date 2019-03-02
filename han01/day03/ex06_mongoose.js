//ex06_mongoose.js

const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

let database;
let userSchema;
let userModel;

function connectDB(){
    const dbURL = "mongodb://localhost:27017/local";
    console.log("데이터베이스 연결을 시도합니다.");

    mongoose.Promise = global.Promise;
    mongoose.connect(dbURL);
    database = mongoose.connection;

    database.on("error", console.error.bind(console, "connection error"));
    database.on("open", function(){
        console.log("DB에  연결됨");
    });
    database.on("disconnected", ()=>{
        console.log("연결이 끊어져서 5초 후 다시 연결 시도.");
        setTimeout(connectDB(), 5000);
    });
}


app.set("port", process.env.Port || 3000);

var server = http.createServer(app);
server.listen(app.get("port"), function(){
    console.log("http://localhost:%d", app.get('port'));
    connectDB();
});