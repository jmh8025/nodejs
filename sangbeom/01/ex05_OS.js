// ex05_os.js

// os 내장모듈

// 내장모듈은 틀별히 설치할 필요없다

var OS = require('os');

console.log('os의 호스트: %s',OS.hostname());

console.log('시스템 메모리:%d/%d', OS.freemem(),OS.totalmem());
console.log('사용중인 메모리:%d', OS.freemem()-OS.totalmem());
console.log('시스템의  cpu정보: \n',OS.cpus());
console.log('시스템의 네트워크 인터페이스 정보 \n');
console.dir(OS.networkInterfaces());

