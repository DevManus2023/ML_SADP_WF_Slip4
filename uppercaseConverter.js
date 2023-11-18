//Slip 4: Create a Node.js file that will convert the output "Hello World!" into upper-case letters 
// Import the 'readline' module to read input from the console
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for input
rl.question('Enter a string: ', (inputString) => {
  // Convert the input string to uppercase
  const uppercasedString = inputString.toUpperCase();

  // Display the result
  console.log(`Uppercase: ${uppercasedString}`);

  // Close the readline interface
  rl.close();
});

// Event listener for when the interface is closed
rl.on('close', () => {
  console.log('Bye!');
  process.exit(0);
});