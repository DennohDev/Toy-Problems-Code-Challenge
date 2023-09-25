// The Code for interacting with the user

// Imports the Readline library
const readline = require("readline");

// Import the grading.js file that contains the grading functon
const grading = require("./grading");

// Access the grading function in the grading file
const getGrade = grading.grading

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the student\'s mark (between 0 and 100): ", (mark) => {
    console.log(getGrade(mark));
    rl.close();
})