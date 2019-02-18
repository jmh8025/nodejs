//ex01_log.js
//node 파일의 확장자는  .js이다.

console.log("hello nodejs world");

//하위버전 2014년 이후 나온 책으로 볼것
// 적어도 2016년 이후에 나온 책으로
console.log("hello"+"world!");
console.log("나이>>"+45+"세");


console.log('숫자 보여주기:%d',100);
console.log('문자 보여주기:%s',"100");
console.log('json 객체 보여주기:%j',{"name":"김태리"});
console.log({"name":"김태리"});
console.dir({"name":"김태리"});

let name = '송준기';
console.log( `송혜교 남편은 ${name}입니다.`);


//var은 같은 페이지 같은 이름의 식별자 선언 가능.
//let 은 같은 페이지에 같은 이름의 식별자 불가능.(ES에 추가된 방식)
// Es(ecma script)에 추가된 키워드 : let, class , const, constructor
// ecma -  유럽표준, ansi - 미국표준
let result = 0;

console.time('time_check');
for(var i=1; i <= 10000; i++){
    result += i;
    
}
console.timeEnd('time_check'); // 실행시간 출력

console.log('1~10000까지 더한 결과: %d',result);

//__dirname  현재 디렉토리 
//__filename  현재 파일 위치

console.log('현재 디렉토리:%s',__dirname);
console.log('현재 파일위치:%s',__filename);
