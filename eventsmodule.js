const EventEmitter = require('events');

const emitter = new EventEmitter();

//register a listener for bellring event
emitter.on('bellring', (period) => {
    console.log(`Hurray! Hurray! ${period}`);
})

// //raise an event
// setTimeout(() => {
//     emitter.emit('bellring', 'second period ended');
// }, 2000)