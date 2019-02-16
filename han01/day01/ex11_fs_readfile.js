//ex11_fs.js
var fs = require("fs");


/*var data = fs.readFileSync("./ex10_eventEmitter_require.js", "utf-8");
//동기식 - 순서
//fs.readFileSync() 함수 처리 되기 전에는 아래부분 실행 안됨
console.log(data);*/


fs.readFile("./ex10_eventEmitter_require.js", "utf-8", (err,data)=>{
    //파일일기 완료 후 실행
    //콜백함수의 첫번째 인자는 Error객체.
    console.log("뭐가 먼저 나오나1");
    console.log(data);
});
console.log("뭐가 먼저 나오나2");