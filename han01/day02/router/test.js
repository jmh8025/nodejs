
var getFunction = function(router){
    router.route("/").get(function(req, res){
        console.log(req);
        res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
        res.end("<h1>시발 나온다</h1>");
    });
}
var getFunctionAAA = function(router){
    router.route("/aaa").get(function(req, res){
        console.log(req);
        res.writeHead(200, {"content-type" : "text/html;charset=utf-8"});
        res.end("<h1>시발 나온다</h1>");
    });
}

module.exports.test2 = getFunction;