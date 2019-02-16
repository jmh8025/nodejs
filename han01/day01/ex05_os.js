//ex05_os.json
//os 내장 모듈
//내장 모듈은 따로 설치 하지 않고 바로 사용 가능.

var os = require('os');

console.log("os의 호스트 : %s", os.hostname());
console.log("시스템 메모리 : %d", os.freemem(), os.totalmem());
console.log("사용중인 메모리 : %d", os.totalmem() - os.freemem());
console.log("시스템 CPU 정보 : \n", os.cpus());
console.log("시스템 네트워크 인터페이스 정보 \n");
console.dir(os.networkInterfaces());