// 
/*
process.on('exit',()=>{
    console.log('exit 이벤트발생');
});

setTimeout(()=>{
   console.log('2초 후에 시스템 종료!'); 
    process.exit();
},2000);
*/
process.on('exit',()=>{
    console.log('exit 이벤트발생');
});

process.on('my_event',(cnt)=>{
    console.log('2초후에  tick이벤트 발생',cnt);
    process.exit();
});

setTimeout(()=>{
    process.emit('my_event',333);
},2000);



