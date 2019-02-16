//ex01_log.js
//node 파일의 확장자는 .js이다.

console.log("안녕" + "엠엔씨");
console.log("나이>>>" + 45 + "세");

console.log('숫자 보여주기 :  %d', 100);
console.log('문자 보여주기 :  %s', "ㅋㅋㅋㅋ");
console.log('json 보여주기 :  %j', {"이름" : "한상민"});
console.log({"이름" : "한상민"});
console.dir({"이름" : "한상민"});

let name="김태리";
console.log(`이름은 ${name}`);

//var는 같은페이지 같은 이름의 식별자 선언 가능.(JS방식)
//let은 같은페이지 같은 이름의 식별자 선언 불가능.(ES방식)
//ES에 추가된 키워드 : let, const, class, constructor
//ECMA는 유럽 표준, ANSI는 미국 표준
let result = 0;

console.time('time_check');
for(var i=1; i<=10000; i++){
    result += i;
}
console.timeEnd("time_check");
console.log('1~10000까지 더한 결과 : %d', result);

//__dirname 현재 디렉토리
//__filename 현재 파일 위치
console.log("현재 디렉토리 : %s", __dirname);
console.log("현재 파일위치 : %s", __filename);

