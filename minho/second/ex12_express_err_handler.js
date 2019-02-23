//npm i serve-static --save
//express.Router() 를 사용.
const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const bodyParser = require('body-parser');
const router = express.Router();

app.set('port',3000);

app.use('/public',static(__dirname+'/public'));

// post 요청시 body에 저장된 요청 파라미터 사용
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.route('/process/login/:name/:address').post((req,res)=>{
    console.log('/process/login 요청됨.');

    let paramId = req.body.id;
    let paramPwd = req.body.password;
    let paramName = req.params.name;
    let paramAddr = req.params.address;
   
    res.writeHead(200, {'Content-type':'text/html;charset=utf8'});
    res.write(`<p>param id:${paramId}</p>`);
    res.write(`<p>param pwd:${paramPwd}</p>`);
    res.write(`<p>param name:${paramName}</p>`);
    res.write(`<p>param addr:${paramAddr}</p>`);
    res.end();
});

app.use('/',router);

const expressErrorHandler = require('express-error-handler');
let errorHandler = expressErrorHandler({
    static : {
        '404' : `${__dirname}/public/404.html`
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
const server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log(`http://localhost:${app.get('port')}`);
});