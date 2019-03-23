require('dotenv').config();

const mongoose = require('mongoose');
const{
    PORT:port=4000,
    MONGO_URI : mongoURI
}= process.env;

mongoose.Promise = global.Promise;
mongoose.connect( mongoURI, { useNewUrlParser: true })
.then(()=>{
    console.log('connected to mongodb');
}).catch((e)=>{
    console.log(e)
});


const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();


//라우터 설정
router.use('/api',api.routes());

app.use(bodyParser());


app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`Server started on port`);
});


