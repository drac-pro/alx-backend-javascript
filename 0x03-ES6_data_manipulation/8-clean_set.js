export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';
  return Array.from(set)
    .filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    .join('-');
}
