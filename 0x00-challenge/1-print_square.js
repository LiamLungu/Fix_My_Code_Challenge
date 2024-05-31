#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/

// Check if size argument is provided
if (process.argv.length <= 2) {
    console.error("You forgot to tell me how big to make the square!");
    console.error("Usage: ./1-print_square.js <size>");
    console.error("Example: ./1-print_square.js 8");
    process.exit(1);
}

// Convert the size argument to a number
const size = parseInt(process.argv[2]);

// Print the square
for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
        line += "#"; // Add a '#' to the line
    }
    console.log(line); // Print the line
}
