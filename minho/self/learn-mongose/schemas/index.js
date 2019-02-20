const mongoose = require('mongose');

module.exports= () =>{
    const connect = () => {

        if(ProcessingInstruction.env.NODE_ENV !== 'production'){
            mongoose.set('debug',true);
        }
        mongoose.connect('mongodb://admin:mnca@pro1@localhost:27017/admin',{
            dbName:'nodejs',
        },(error)=>{
            if(error){
                console.log('몽고디비 연결에러',error);
            }else{
                console.log('몽고디비 연결 성공');
            }
        });
    };
    connect();
    mongoose.connection.on('disconnected',() => {
        console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다');
        connect();
    });
    require('./user');
    require('./comment');
}