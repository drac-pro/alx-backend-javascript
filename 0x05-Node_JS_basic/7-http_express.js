/**
 * Creates a simple app using express.
 */
const express = require('express');
const fs = require('fs').promises;

/**
 * attempt to asynchronously read the database file
 * @param {string} path - path to the database file
 */
async function countStudents(path) {
  try {
    const fileContent = await fs.readFile(path, 'utf-8');
    const lines = fileContent.toString().trim().split('\n');
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');

    const fieldCount = {};
    let totalStudents = 0;
    let output = '';

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      // eslint-disable-next-line no-continue
      if (!line.trim()) continue;
      const columns = line.split(',');
      const field = columns[fieldIndex];
      const firstName = columns[firstNameIndex];

      if (!fieldCount[field]) {
        fieldCount[field] = [];
      }
      fieldCount[field].push(firstName);
      totalStudents += 1;
    }

    output += `Number of students: ${totalStudents}\n`;
    for (const [field, names] of Object.entries(fieldCount)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// simple app
const app = express();
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  try {
    const data = await countStudents(process.argv[2].toString());
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Simple app listening on port ${port}`);
});

module.exports = app;