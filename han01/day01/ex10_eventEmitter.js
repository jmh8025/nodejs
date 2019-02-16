//ex10_eventEmitter.js
/*process.on('exit', ()=>{
    console.log("exit event has occurred");    
});
console.log("System will be shut down in 2 seconds");
setTimeout(() => {
    process.exit();
}, 2000);*/
process.on('exit', ()=>{
    console.log("exit 이벤트 발생");
});
process.on('myEvent', (cnt)=>{
    console.log("2초 후 에 tick 이벤트 발생", cnt);
    process.exit();
});

setTimeout(() => {
    process.emit('myEvent', 333);
}, 2000);
