var os = require('os');

console.log('os의 호스트네임 : %s',os.hostname());
console.log('시스템 메모리 : %d/%d', os.freemem(), os.totalmem());
console.log('사용준인 메모리 : %d',os.totalmem() - os.freemem());
console.log('시스템의 CPU정보 : \n', os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());

