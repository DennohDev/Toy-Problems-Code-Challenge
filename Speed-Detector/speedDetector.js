
let points = 0;
const speedLimit = 70;

// Function to round of to the nearest digit that is divisible to 5
function round(currentSpeed) {
    return Math.ceil(currentSpeed/5) * 5;
}

// Function to check the speed and deduct points
function speedCheck (currentSpeed) {
    if (currentSpeed <= speedLimit){
        return ('Ok')
    } else {
       points = (round(currentSpeed) - speedLimit) / 5
       if (points > 12) {
        return ("License suspended")
       } else {
        return ("Points: " + points)
       }
    }

}

module.exports ={
    speedCheck
}