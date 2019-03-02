var test = require('./test.js');

var test2 = function(router){
    router.route('/').get((req,res)=>{
        test.test(req,res);
    });
}

module.exports.test2 = test2;