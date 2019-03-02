var test = function(req,res){
    console.log('/ 요청');
    
    res.writeHead(200, {'Content-type':"text/html;charset=utf8"});
    res.app.render('loader_test',{},(err,html)=>{
        if(err){
            res.end("<h1>에러발생</h1>");
        };
        res.end(html);
    });
};


module.exports.test = test;