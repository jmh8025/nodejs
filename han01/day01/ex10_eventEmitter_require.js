var Calc = require("./ex10_eventEmitter2");
var calc = new Calc();
calc.emit('stop');

console.log(Calc.title);