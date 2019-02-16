var util = require("util");

var EventEmitter = require("events").EventEmitter;

var Calc = function(){
    var self = this;
    this.on("stop", ()=>{
        console.log("Calc에서 stop event 전달 됨");
    });
}
Calc.prototype.add = function(a, b){
    return a + b;
}

util.inherits(Calc, EventEmitter);

module.exports = Calc;
module.exports.title = "calculator";