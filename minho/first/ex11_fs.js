var fs = require('fs');

var data = fs.readFileSync('./ex10_EventEmitter_require.js');


// fs.readFileSync() 함수 처리 되기 전에는 아래부분 실행 안함
fs.readFile('./ex10_EventEmitter_require.js','utf8',(err,data)=>{
    console.log('여기1');
    //파일 읽기 완료 후 실행
    console.log(data);
});
console.log('여기2')