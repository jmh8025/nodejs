var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost',(err, client)=>{
    if(err){
        console.log('몽고디비 connect 에러',err)
        throw err;
    }
    // mongodb 모듈 v3방식
    // mongodb 모듈 2버전에서는 dbURL뒤에 DB명을 붙인다
    var db = client.db('vehicle');
    var car = db.collection('car');
    car.findOne({},(err,result)=>{
        if(err){
            console.log('몽고디비 find 에러',err)
            throw err;
        }
        console.log(result.name);
        client.close();
    })
});
