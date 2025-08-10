const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3130;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Chinmay Bhatt');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
