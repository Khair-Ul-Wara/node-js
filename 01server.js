// 01server.js
const http = require('http');

// Define the hostname and port
const hostname = 'localhost';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a simple response
  res.end('Hello from Node.js Server!');
});

// Start listening
server.listen(port, hostname, () => {
  console.log(`  Server running at http://${hostname}:${port}/`);
});




