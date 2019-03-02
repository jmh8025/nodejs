/////

var fs = require('fs');
/*
var data = fs.readFileSync('./ex10_eventEmitter_require.js','utf8');
//  동기식
//fs.readFileSync() 함수처리 되기 전에는 아래부분 실행 안함 동기식
console.log(data);
*/

fs.readFile('./ex10_eventEmitter_require.js','utf8',(err,data)=>{
   // 파일 읽기 완료 후 실행.
    //콜백 함수의 첫번째 인자는 err 객체
     console.log(data);
});


console.log('파일읽기 완료와 관계없이 실행 된다.');

