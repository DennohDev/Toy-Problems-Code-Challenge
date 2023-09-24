const readline = require("readline");
const salaryCalculator = require("./salaryCalculator");
const calculateNetSalary = salaryCalculator.calculateNetSalary;

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter your gross salary: ", (grossSalary) => {
    console.log(calculateNetSalary(grossSalary));
    rl.close();
})