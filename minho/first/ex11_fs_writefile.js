// fs모듈을 이용해서 파일 쓰기

var fs = require('fs');

var msg = "Hello MNC2";
//파일에 데이터를 쓴다(비동기식)
fs.writeFile('./output.txt',msg, function(err,data){
    if(err){
        console.log("Write file Ereor!",err);
        return;
    }
    console.log('output.txt 파일 쓰기 완료!');
});

//파일에 데이터를 쓴다(동기식)
var res = fs.writeFileSync('./output.txt',msg);
console.log(console.log(res));