//ex14_http.js
//http 모듈 - 서버 실행

var http = require("http");
var fs = require("fs");

//파일의 내용을 브라우저에 출력
//request : 요청 정보 객체 (요청 파라미터..)
//response : 응답 정보 객체 (브라우저)
var server = http.createServer(function(req, res){
    var instream = fs.createReadStream("./mnc.txt", {flag : "r"});
    res.writeHead(200, {"Content-type" : "text/html; charset=utf-8"})
    instream.pipe(res);
});

server.listen(9090, function(){
    console.log("서버 실행 중");
});