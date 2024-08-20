const fs = require('fs').promises;

/**
 * attempt to asynchronously read the database file synchronously
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

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const columns = line.split(',');
      const field = columns[fieldIndex];
      const firstName = columns[firstNameIndex];

      if (!fieldCount[field]) {
        fieldCount[field] = [];
      }
      fieldCount[field].push(firstName);
      totalStudents += 1;
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(fieldCount)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
