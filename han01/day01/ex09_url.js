//ex09_url.js
//url모듈을 이용한 주소 활용

var url = require("url");
var queryString = require("querystring");

var curURL = url.parse("https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=초콜렛");
var curStr = url.format(curURL);
console.log(curStr);


//querystring 모듈을 이용한 path에서 querystring param객체 추출
//querystring이 문자열 split기능을 포함하고 있다.
var param = queryString.parse(curURL.query);
// console.log(param);
console.log(param.sm);