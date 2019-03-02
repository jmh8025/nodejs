//ex02_mongodb.js
//npm i mongodb
//npm i mongodb@3.1.13

//mongoClient 가져오기

var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost", function(err, client){
    if(err){
        console.log(err);
        throw err;
    }
    //mongodb module v3 방식
    //mongodb module v2 에서는 dbURL 뒤에 db명을 붙인다
    var db = client.db("vehicle");
    var car = db.collection("car");
    car.findOne({}, function(findErr, result){
        if(findErr){
            console.log(findErr);
            throw findErr;
        }
        console.log(result.name);
        client.close();
    });
});
