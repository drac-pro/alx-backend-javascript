import { promises as fs } from 'fs';

/**
 * attempt to asynchronously read the database file
 * @param {string} path - path to the database file
 */
async function readDatabase(path) {
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
    }

    return fieldCount;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
