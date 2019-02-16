//util 모듈을 이용한 상속
//util.format(format[,...]);
//변환문자열(포멧기호 - placeholder)
// -%s, %d, %j, %i, %f ...

var util = require('util');
//console.log()에서 출력하던 포멧 형식을 그대로 사용함.
var str1 = util.format('이름 : %s, 나이 : %d',"전민호",18);
console.log(str1)


var str2 = util.format('%d + %d = %d',1,1,(1+1))
console.log(str2)





