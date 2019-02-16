//ex01_log.js
//node 파일의 확장자는 .js이다.
 
console.log("hello nodejs world");

console.log("Hello" + "world!");

console.log("나이 >>>>" + 45 + "세");

console.log("숫자 보여주기 : %d",100);
console.log("문자열 보여주기 : %s","미스터 션샤인");
console.log("JSON 객체 보여주기: %j",{"name":"김태리"});
console.dir("dir");

let name = '송중기';
console.log(`송혜교 남편은 
${name}입니다.`);


let result = 0;
console.time('time_check');
for(var i=1; i<=10000; i++){
    result += i;
}
console.timeEnd('time_check');
console.log('1~10000까지 더한 결과 : %d',result);


// __dirname 현재디렉토리
// __filename 현재파일위치
console.log('현재 디렉토리:%s', __dirname);
console.log('현재 파일위치:%s', __filename);