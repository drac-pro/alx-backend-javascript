/**
 * round two numbers and return the result of the operation
 * @param {string} type - operation to be performed
 * @param {number} a - first number
 * @param {number} b - second number
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIV':
      if (roundedB === 0) return 'Error';
      return roundedA / roundedB;
    default:
      break;
  }
}

module.exports = calculateNumber;
