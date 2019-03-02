// ex03_require.js

let Calc = require('./ex03_export');

let calc = new Calc();

console.log('calc.plus(10,2)---->', calc.plus(10,2));
console.log('calc.minus(10,2)---->', calc.minus(10,2));

//사용자가 모듈을 만들어서 쓸수있다.


