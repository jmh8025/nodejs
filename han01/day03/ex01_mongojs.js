//ex01_mongojs.js
//npm i mongojs

var mongojs = require("mongojs");
var db = mongojs("vehicle", ['car']);

db.car.save({"name" : "485 Italia", "price" : 45000, "company" : "FERRARI", "year" : 2015});

db.car.find({name : "M4"}, {_id : false},function(err, data){
    console.log(data);
});

db.car.find({}, {_id : false},function(err, data){
    console.log(data);
});