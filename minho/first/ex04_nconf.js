//외장모듈 설치
// npm i -g nconf
// npm i nconf --save
var nconf = require('nconf');
nconf.env();

console.log('os 환경변수 : %s', nconf.get('OS'));

// npm uninstall nconf