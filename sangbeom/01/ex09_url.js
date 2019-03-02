///////url
// url  모둘을 이용한 주소 활용

var url = require('url');
var querystring = require('querystring');

var curURL = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=초코렛');

//console.dir(curURL);


var curStr = url.format(curURL);
console.log(curStr);


// querystring  모듈을 이용한  path에서 쿼리스트링   param 객체 추출
// querystring이 문자열  split() 기능을 포함하고 있다.
var param = querystring.parse(curURL.query);
console.dir(param);
console.log(param.query);
console.log(param.sm);


