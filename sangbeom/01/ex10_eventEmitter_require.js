var Calc = require('./ex10_eventEmitter_2');

var calc = new Calc();

//  외부에서 calc 객체안에  stop 이벤트 전달
calc.emit('stop');

console.log(Calc.title);

