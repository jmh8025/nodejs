//ex12_fs_pipe.js

var fs = require("fs");
var inname = "./mnc.txt";
var outname = "./mnc2.txt";

fs.exists(outname, function(exists){
    if(exists){
        fs.unlink(outname, function(err){
            if(err) throw err;
            console.log(`기존 파일 ${outname}을 삭제함`);
        });
    }

    var infile = fs.createReadStream(inname, {flag:"r"});
    var outfile = fs.createWriteStream(outname, {flag:"w"});
    infile.pipe(outfile);

    console.log(`파일 복사 ${infile} -> ${outfile}`);
});

