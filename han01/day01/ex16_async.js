//ex16_async.js
//task들의 실행 순서를 정해준다.(흐름제어)
//npm install async --save
//JS용 : async.js

var async = require("async");

async.series([
    function task1(callback){
        setTimeout(function(){
            callback(null, "result1");
        }, 2000);
        
    },
    function task2(callback){
        setTimeout(function(){
            callback(null, "result2");
        }, 1000);
    },
    function task3(callback){
        setTimeout(function(){
            callback(null, "result3");
        }, 500);
    }
],
    function(err, result){
        console.log(result);
    }
);