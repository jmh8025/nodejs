//

var http =require('http');

var fs = require('fs');


//파일의 내용을 브라우저에 출력
//  request : 요청 정보 객체(요청파라미터)
// response : 응답 정보 객체( 브라우저)
var server = http.createServer(function(request,response){
    
    response.writeHead(200,{'Content-type':'text/plain;charset=utf8'});
    
    var instream = fs.createReadStream('./output.txt',{flag:'r'});
    
    instream.pipe(response); // 파일 읽은것을 화면에 보여준다
    
});

server.listen(3000,function(){
    console.log('서버 실행중');
})