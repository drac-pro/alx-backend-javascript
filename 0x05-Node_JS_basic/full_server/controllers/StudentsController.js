import readDatabase from '../utils';

/**
 * Controller class to handle student-related requests
 */
class StudentsController {
  /**
   * Handles the request to get all students
   * @param {Object} req - The request object
   * @param {Object} res - The response object
   */
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2].toString());
      let output = 'This is the list of our students\n';
      // eslint-disable-next-line max-len
      const sortedFields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      sortedFields.forEach((field) => {
        output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });
      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  /**
   * Handles the request to get students by major
   * @param {Object} req - The request object
   * @param {Object} res - The response object
   */
  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(process.argv[2].toString());
      if (!students[major]) {
        return response.status(200).send('List: ');
      }
      return response.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
