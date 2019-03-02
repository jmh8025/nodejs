///

// fs 객체로 스트림 단위로 파일 읽고 쓰기

var fs = require('fs');
var infile = fs.createReadStream('./output.txt',{flag:'r'});
var outfile = fs.createWriteStream('./output2.txt',{flag:'w'});

infile.on('data',function(data){
    console.log('읽어들인데이터>>', data);
    outfile.write(data);
});

// 파일읽기 종료 이벤트
infile.on('end',function(){
    console.log('파일읽기종료');
    outfile.end(function(){
        console.log('파일 쓰기 종료!');
    });
});


