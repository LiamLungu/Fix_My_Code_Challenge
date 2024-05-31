#!/usr/bin/node

if (process.argv.length <= 2) {
    console.log("Missing argument");
    console.log("Usage: ./1-print_square.js <size>");
    process.exit(1);
}

let size = parseInt(process.argv[2]);

for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
        row += "#";
    }
    console.log(row);
}
