// Async  모듈
// task 들의 실행 순서를 정해준다.
// npm install async --save

var async = require('async');

async.series([
    function task1(callback){
        setTimeout(function(){
            callback(null,'result1');
        },2000);
        
    },
     function task2(callback){
         setTimeout(function(){
              callback(null,'result2');
         },500);
       
    },
     function task3(callback){
         setTimeout(function(){
              callback(null,'result3');
         },100);
       
    },
],function(err,result){
    console.log(result);
});
