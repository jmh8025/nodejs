//ex01_http_server.js

var http = require("http");

var server = http.createServer();

server.on("request", function(req, res){
    console.log("request 요청 받음");
    res.writeHead(200, {"content-type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("   <head>");
    res.write("   <title>타이틀입니다</title>");
    res.write("   </head>");
    res.write("   <body>");
    res.write("   <h1>윤박김밥 망해라</h1>");
    res.write("   </body>");
    res.write("</html>");
    res.end();
    

});

server.listen(3000, function(){
    console.log("http://localhost:%d", 3000);
});