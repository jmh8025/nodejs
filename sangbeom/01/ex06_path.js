//ex06_path.js

/////// 패스 내장 모듈

var path = require('path');

var directories = ["Users","newDir","newDocs"];
console.log('문서 디랙토리:%s', directories.join(path.sep));

var curPath = path.join('/Users/newDir','app.exe');

console.log(' 파일패스 : %s', curPath);

//  문서 경로를 만들때 사용

console.log(__dirname + '/myDir');
console.log(path.join(__dirname, 'myDir'));

// 패스에서 디렉토리, 파일명, 확장자 구별하기 

var filename = "C:\\Users\\newDir\\app.exe";

var dirname = path.dirname(filename);
console.log("dirname >>",dirname);

var basename = path.basename(filename);
console.log('basename >>>', basename);

var extname = path.extname(filename);
console.log("extname>>",extname);



