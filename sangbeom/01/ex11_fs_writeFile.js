//fs 모듈을 이용해서 파일 쓰기

var fs = require('fs');

var msg = "Hello node world";

///  파일에 데이터를 쓴다.
// 비동기식
/*
fs.writeFile('./output.txt',msg,function(err){
    if(err){
        console.log("write file Error!",err);
        return;
    }
    
    console.log('output.txt 파일 쓰기 완료!');
});*/

var res = fs.writeFileSync('./output.txt',msg);
console.log(res);
