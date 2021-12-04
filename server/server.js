const net = require('net');
const PORT = 3000;

const userIDList = [];

const server = net.createServer();

server.on('connection', (client) => {
  const clientID = (Math.random()).toFixed(4);
  userIDList.push(clientID);
  console.log(`Connections : ${userIDList}`);
  console.log('New client connected!');
  client.write('Hello there!');
  client.setEncoding('utf8');
  client.on('data', (data) => {
    console.log(`CLIENT ${clientID} ==> ${data}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

//------------------------------THIS ALL WORKS-----------------------------------

