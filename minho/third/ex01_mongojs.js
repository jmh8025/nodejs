var mongojs = require('mongojs');
var db = mongojs('vehicle',['car']);

db.car.save({name:'K3',price:1,company:'KIA',year:2019})

db.car.find({},{_id:false},(err,data)=>{
    console.log(data);
});

