//ex07_util.js

// util 모듈을 이용한 문자열 포멧 

//  util.format (format[, ... ]);
// 변환 문자열 (포맷기호 - placeholder)
// -%s, %d , %j , %i , %f 


// util 내장 모둘 불러오기
var util = require('util'); 

// console.log 에서 출력하던 포멧 형식을 그대로 사용
var str1 = util.format('성명:%s,나이:%d',"홍길동", 24);
console.log(str1);


// 포멧 문자열로 사용 가능
var str2 = util.format('%d + %d = %d',10,2,(10+2));
console.log(str2);




