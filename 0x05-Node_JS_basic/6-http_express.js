/**
 * Creates a simple app using express.
 */
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Simple app listening on port ${port}`);
});
