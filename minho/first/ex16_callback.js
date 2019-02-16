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
        },5000);
    }
],function(err,results){
    console.log(results);
}); 