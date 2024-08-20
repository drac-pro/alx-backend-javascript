/**
 * program to execute through command line in phases
 */
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
