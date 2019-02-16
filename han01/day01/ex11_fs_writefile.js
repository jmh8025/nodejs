//ex11_fs_writefile.js

//fs모듈을 이용해서 파일 쓰기

var fs = require("fs");
var msg = "시발 엠엔씨";

//파일에 데이터를 쓴다.

fs.writeFile("./mnc.txt", msg, (err)=>{
    if(err){
        console.log("엠엔씨 파괴", err);
        return;
    }
    console.log("파일쓰기 완료");
});

fs.writeFileSync("./mnc2.txt", msg);
console.log("파일쓰기 완료!");