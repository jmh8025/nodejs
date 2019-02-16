//ex06_path.js
//path 모듈 예제

var path = require("path");

var dirs = ["users", "newDir", "newDocs"];
console.log("문서 디렉토리 : %s", dirs.join(path.sep));

var currentPath = path.join("/users/newDir", "app.exe");
console.log("file path : %s", currentPath);

console.log(__dirname + "/myDir");
console.log(path.join(__dirname, "myDir"));

//path에서 디렉토리, 파일명, 확장자 구별하기
var filename = "C:\\Users\\newDir\\app.exe";
var dirname = path.dirname(filename);
console.log("dirname : %s", dirname);

var basename = path.basename(filename);
console.log("basename : %s", basename);

var extname = path.extname(filename);
console.log("extname : %s", extname);