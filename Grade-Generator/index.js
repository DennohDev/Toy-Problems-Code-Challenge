// The Code for interacting with the user

const readline = require("readline");
const grading = require("./grading");
const getGrade = grading.grading

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the student\'s mark (between 0 and 100): ", (mark) => {
    console.log(getGrade(mark));
    rl.close();
})