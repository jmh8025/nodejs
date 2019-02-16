//process 객체 : 실행시 자동으로 만들어진다.
//-argv : 파라미터 정보
//-env  : 환경변수 정보
//-exit() : 프로세스 종료

//console.dir()은 인자로 주어진 객체의 정보가 보여진다.
//console.dir(process);
//console.log(process.argv);
//console.log(process.env.PATH);
//console.log(process.env['os']);

//node 파일명 변수
//console.log(process.argv);
//console.log(process.argv.length);

if(process.argv.length>2){
    console.log("전달 된 파라미터 있음");
    console.log("세번쨰 파라미터 >>>", process.argv[2]);
    
    process.argv.forEach((item, index)=>{
        if(index>1){
            console.log(index + " : " + item);    
        }
    });
}
