const { createServer } = require('node:http');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(1245);
