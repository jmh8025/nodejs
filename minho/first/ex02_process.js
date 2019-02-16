// process 객체 : 실행시 자동으로 만들어 진다.
// argv : 파라미터 정보
//console.log(process.argv)
//console.log(process.env.PATH)
//console.log(process.argv.length)

if(process.argv.length > 2){
    console.log('전달 된 파라미터 있다');
    console.log('세번째 파라미터 >>> ',process.argv[2]);
    //() => {} :
    process.argv.forEach((item,index) => {
        if(index > 2)
        console.log(index + " : " + item);
    });
}

