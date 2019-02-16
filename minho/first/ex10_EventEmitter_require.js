var Calc = require('./ex10_EventEmitter_2');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title);