const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const path = require('path');
const router = express.Router();
app.set('port',3000);

app.use('/public',static(path.join(__dirname,'public')));

router.route('/plus/:x/:y').get((req,res)=>{
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    res.end(""+(x+y));
});

router.route('/minus/:x/:y').get((req,res)=>{
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    res.end(""+(x-y));
});

router.route('/mult/:x/:y').get((req,res)=>{
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    res.end(""+(x*y));
});

router.route('/div/:x/:y').get((req,res)=>{
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    res.end(""+(x/y));
});

app.use('/',router);

const server = http.createServer(app);
server.listen(app.get('port'),() =>{
    console.log("http://localhost%d",app.get('port'));
});