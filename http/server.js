const http = require('http');

// creating the hostname and port
const hostName = 'localhost'
const PORT = process.env.PORT || 8000;

// creating server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

// listening for requests
server.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});
