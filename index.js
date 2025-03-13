const EventEmitter = require('events');
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');

//Event-Driven Architecture
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (name) => {
console.log(`Hello, ${name}! Welcome to Node.js!`);
});

eventEmitter.emit('greet', 'Aboli');

//fs, path, http, os

//File System (read, write, update, and delete files and directories.)
//Asynchronous Reading:
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File Content:', data);
});
//Synchronous Reading:
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File Content:', data);
} catch (err) {
  console.error('Error:', err);
}

//Asynchronous Writing:
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File has been written!');
});

//Appending to a File:
fs.appendFile('log.txt', 'New log entry\n', (err) => {
  if (err) throw err;
  console.log('Log updated!');
});

//Deleting Files
fs.unlink('output.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});

//Creating a Directory:
fs.mkdir('newDir', (err) => {
  if (err) throw err;
  console.log('Directory created!');
});

//Deleting a Directory:
fs.rmdir('newDir', (err) => {
  if (err) throw err;
  console.log('Directory deleted!');
});

//Path Module
//Getting File Extension:
const extension = path.extname('example.txt');
console.log('File Extension:', extension);  

//Joining Paths:
const fullPath = path.join(__dirname, 'files', 'example.txt');
console.log('Full Path:', fullPath);

//Getting the Base Name:
const baseName = path.basename('/users/docs/file.txt');
console.log('Base Name:', baseName);  

//Getting the Directory Name:
const dirName = path.dirname('/users/docs/file.txt');
console.log('Directory Name:', dirName);  

//HTTP module
//Creating a Basic Server:
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

//Handling Routes:
const serverN = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Us</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

//Operating system module
//Platform and Architecture:
console.log('Platform:', os.platform());  
console.log('Architecture:', os.arch());  

//CPU Information:
console.log('CPU Info:', os.cpus());

//Memory Usage:
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());

//Home Directory:
console.log('Home Directory:', os.homedir());

//System Uptime:
console.log('System Uptime:', os.uptime(), 'seconds');
