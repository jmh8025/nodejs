var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var static = require('serve-static');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;
var dbUrl = 'mongodb://localhost';

function dbConnect(){
    MongoClient.connect(dbUrl, (err,client)=>{
        if(err){
            console.log('db connect error',err);
            return;
        }
        db = client.db('vehicle');
        console.log('db에 연결 되었다.');
    });
}


app.set('port',3000);
// view engin을 ejs로 설정
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
console.log(app.get('views'));
app.use('/public',static(path.join(__dirname,'public')));


function carFind(db,carName,callback){
    var car = db.collection('car');
    car.find({name:carName}).toArray((err,result)=>{
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    });
}





router.route('/car_list').get((req,res)=>{
    console.log('car_list요청됨');
    var car = db.collection('car');
    car.find({}).toArray((err,result)=>{
        var context = {'car':{name:'pony',price:500,company:'HYUNDAI',year:1982}};
        if(err){
            console.log('find 에러',err);
            throw err;
        }
        context = {'carList':result};
        console.log(context);
        req.app.render('carList',context,(err,html)=>{
            if(err){
                console.log('render 에러',err);
                throw err;
            }
            res.end(html);
        })
    });
    
});

router.route('/car_find').get((req,res)=>{
    console.log('/car_find 요청됨');
    var carName = req.query.name;
    carFind(db,carName,(err,result)=>{
        var car = {car:result[0]};
        req.app.render('car_detail',car,(err,html)=>{
            if(err){
                console.log('ejs렌더링 에러',err);
                return;
            }
            res.end(html);
        });
    });
});

app.use('/',router);


var server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('http://localhost:3000');
    dbConnect();
});