// process.on('exit',()=>{
//     console.log('exit')
// });

// console.log('2초 후에 시스템 종료!');
// setTimeout(()=>{
//     process.exit();
// },2000);

process.on('my_event',(cnt)=>{
    console.log('2초 후에 tick 이벤트 발생',cnt);
    process.exit();
});

setTimeout(()=>{
    process.emit('my_event',333);
},2000);