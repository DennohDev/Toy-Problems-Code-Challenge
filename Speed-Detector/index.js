// User interface to get the current speed from the user
const readline = require("readline");
const speedDetector = require("./speedDetector");
const speedCheck = speedDetector.speedCheck;

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter your current speed (speedLimit: 70): ", (currentSpeed) => {
    console.log(speedCheck(currentSpeed));
    rl.close();
})