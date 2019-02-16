//ex04_nconf.js
//외장 모듈 설치

//npm init (해당 프로젝트 폴더에 packgage.json 파일 생성)

//npm install -g nconf(전역)
//npm insall nconf --save(packgage.json에 dependency 추가)

//npm uninstall xxxx

var nconf = require('nconf');
nconf.env();

console.log("OS환경변수 : %s", nconf.get("OS"));