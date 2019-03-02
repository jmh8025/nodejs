//ex03_carList.js
//mongoClient 가져오기

var http = require("http");
var express = require("express");
var app = express();
var static = require("serve-static");
var path = require("path");
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var db;
var dbURL = "mongodb://localhost";

function dbConnect(){
    mongoClient.connect(dbURL, function(err, client){
        if(err){
            console.log("DB 연결 에러! : ", err);
            return;
        }

        db = client.db("vehicle");
        console.log("DB에 접속 성공!");
    });
}

function carFind(db, carName, callback){
    var car = db.collection("car");

    car.find({name : carName}).toArray(function(err, result){
       if(err){
           callback(err, null);
       }else{
           callback(null, result);
       }
    });
}



app.set("port", 3000);

//view engine 을 ejs로 설정
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.use("/public", static(path.join(__dirname,"public")));

router.route("/carList").get(function(req, res){
    console.log("carList 요청됨");
    // var context = {"car":{name : "Aventador", price : 59000, company : "Lamborghini", year : 2016}};
    
    var car = db.collection("car");
    car.find({}).toArray(function(findErr, result){
        if(findErr){
            console.log(findErr);
            throw findErr;
        }
        console.log(result);
        var context = {"carList" : result};
        req.app.render("carList", context, function(err, html){
            if(err){
                console.log("view rendering 에러 발생 : ", err.stack);
                res.end("<h2>views error!</h2>");
            }
            res.end(html);
        });
    });
});

router.route("/carFind").get(function(req, res){
    console.log("carFind 요청됨");
    var carName = req.query.name;
    carFind(db, carName, function(err, result){
        var car = {car : result[0]};
        req.app.render("carDetail", car, function(err, html){
            if(err){
                console.log("view rendering 에러 발생 : ", err.stack);
                res.end("<h2>views error!</h2>");
            }
            res.end(html);
        });
    });
    
});


app.use("/", router);

var server = http.createServer(app);
server.listen(app.get("port"), function(){
    console.log("http://localhost:%d", app.get("port"));
    dbConnect();
});