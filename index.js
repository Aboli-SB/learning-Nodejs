const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js!`);
});

eventEmitter.emit('greet', 'Aboli');


// const details = require("./second");
// console.log("Hello World", details.name);