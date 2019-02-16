var path = require('path');
var directories = ["users","newDir","newDocs"];
console.log("문서 디렉토리:%s",directories.join(path.sep));

var curPath = path.join('/Users/newDir','app.exe');
console.log('파일패스 : %s',curPath);

console.log(__dirname + '/myDir');
console.log(path.join(__dirname,'myDir'));

//패스에서 디렉토리, 파일명, 확장자 구별하기
var filename = "C:\\Users\\newDir\\app.exe";
var dirname = path.dirname(filename);
console.log("dirname >>>",dirname);

var basename = path.basename(filename);
console.log("basename >>>",basename);

var extname = path.extname(filename);
console.log("extname >>>",extname);