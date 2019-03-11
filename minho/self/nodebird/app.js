const express = require('express'); 
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));
app.set('port',process.env.PORT || 8001);


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.SECRET));
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
}));
app.use(flash());

app.use('/',pageRouter);

app.use((req,res,next) =>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err,req,res)=>{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})


app.listen(8001, () => {
    console.log(`${app.get('port')}번 포트에서 서버 실행중입니다.`);
});