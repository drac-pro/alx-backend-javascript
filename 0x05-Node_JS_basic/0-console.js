/**
 * prints in STDOUT the string argument
 * @param {string} message - The the message to print.
 */
function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}

module.exports = displayMessage;
