// Create web server
// Create a web server that listens to requests on port 3000. When someone accesses the server with a GET request to the path /comments, it should return the comments array from the previous exercise as JSON.

const http = require('http');

const comments = [
  { username: 'alice', comment: 'I love your blog!', timestamp: new Date() },
  { username: 'bob', comment: 'Good post.', timestamp: new Date() }
];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);
console.log('Server listening on port 3000');