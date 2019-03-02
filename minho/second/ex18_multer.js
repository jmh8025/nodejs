const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');

app.set('port', 3000);
app.set('views',path.join(__dirname+'/views'));
app.set('view engine','ejs');
app.use('/public',static(path.join(__dirname,'/public')));


        
var storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null,'uploads');
    },
    filename : function(req,file,callback){
        callback(null,file.originalname + Date.now());
    }
})
    
var upload = multer({
    storage : storage,
    limits : {
        files : 10,
        filesize : 1024*1024*1024
    }
})
router.route('/').get((req,res)=>{
    console.log('22');
    res.end("<h1>2</h1>")
});



app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("http://localhost:%d", app.get('port'));
});