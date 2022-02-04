var events=require('events');

var emitevents=new events.EventEmitter();

var handler =function connected()
{

    console.log("connected to main.....");
    emitevents.emit("data_received");
}
emitevents.on('connection',handler);
emitevents.on('data_received',function()
{
console.log("data received fired successfully");

});
emitevents.emit('connection');
console.log("end reached");