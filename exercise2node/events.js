var events = require('events')
var emitter=new events.EventEmitter()
var handler =function handle()
{
console.log('event handled')
emitter.emit('event handled')
}
emitter.on('handleevent',handler)
emitter.emit('handleevent')