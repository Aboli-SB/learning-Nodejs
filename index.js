const fs = require('fs');

fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File created and content written!');
});


fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File Content:', data);
});


// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('greet', (name) => {
//   console.log(`Hello, ${name}! Welcome to Node.js!`);
// });

// eventEmitter.emit('greet', 'Aboli');


// const details = require("./second");
// console.log("Hello World", details.name);