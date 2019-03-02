// 외장 모듈 설치

// 터미널에서 실행
// npm init ( 해당 프로젝트 폴더에 package.json  파일 생성)



// npm install -g nconf ( 전역환경에 설치 )


// npm install ncof --save (package.json 에 의존성 추가)
// cmd 터미널에서 실행 할것


var nconf = require('nconf');
nconf.env();


console.log('os환경변수: %s',nconf.get('OS')); // 대문자

// 터미널 환경에서 실행
// npm uninstall nconf  (외장모듈 삭제);






