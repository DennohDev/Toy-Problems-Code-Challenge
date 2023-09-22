// A function that prompts the user to input student marks and grades the student accordingly

const message = "The student\'s grade is: ";

function grading (grade) {
    if (grade >= 0 && grade <= 100) {
        if (grade > 79) { 
            return (message + 'A')
        } else if (grade <= 79 && grade >= 60) {
            return (message + 'B')
        } else if (grade <= 59 && grade >= 49) {
            return (message + 'C')
        } else if (grade < 49 && grade >= 40) {
            return (message + 'D')
        } else {
            return (message + 'E')
        }
    } else {
        return ('Please Enter Marks that are between 0 to 100');
    }
} 

module.exports = {
    grading
}

