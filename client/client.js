const net = require('net');
const IP = 'localhost';
const PORT = 3000;

const conn = net.createConnection({
  host: IP,
  port: PORT,
});

conn.setEncoding('utf8');

conn.on('connect', () => {
  conn.write('Hello from client!');
});

conn.on('data', (data) => {
  console.log(`SERVER ==> ${data}`);
});

conn.on('close', () => {
  console.log(`Connection to: https://${IP}:${PORT} lost`);
  rl.close();
});

//-------------------------READLINE INTERFACE-----------------------------------

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line',(line) => {
  conn.write(line);
});