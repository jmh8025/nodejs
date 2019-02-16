//ex07_util.js

//util 모듈을 이용한 문자열 포맷
//utis.format(format[,...]);
//변환문자열(포맷기호 - placeholder)
// - %s, %d, %j, %i, %f ...............
var util = require('util');
var str1 = util.format("성명 : %s, 나이 : %d", "한상민", 33);
console.log(str1);


//포맷 문자열로 사용 가능
var str2 = util.format("%d + %d = %d", 10, 2, (1+2));
console.log(str2);