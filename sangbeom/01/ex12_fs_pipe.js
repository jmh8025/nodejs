var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exists){
    if(exists){
        fs.unlink(outname,function(err){
           if(err) throw err;
            console.log(`기존파일 ${outname}을 삭제함`);
        });
    }
    
    //pipe를 이용한 스트리밍
    var infile = fs.createReadStream(inname,{flag:'r'});
    var outfile = fs.createWriteStream(outname,{flag:'w'});
    infile.pipe(outfile);
    
    console.log(`파일복사 ${infile} -> ${outfile}`);
    
})