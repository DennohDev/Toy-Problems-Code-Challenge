// Function to calculate net Salary from the gross salary


// Functions to calculate the tax deductions based on the net salary
// PAYE Function
function payeDeduction(grossSalary) {
    if (grossSalary <= 24000) {
        return Math.floor(grossSalary * 0.1)
    } else if (grossSalary >= 24001 && grossSalary <= 32333) {
        return Math.floor(grossSalary * 0.25)
    } else if (grossSalary >= 32334 && grossSalary <= 500000) {
        return Math.floor(grossSalary * 0.3)
    } else if (grossSalary >= 500001 && grossSalary <= 800000) {
        return Math.floor(grossSalary * 0.325)
    } else {
        return Math.floor(grossSalary * 0.35)
    }
}

// NHIF Function

function nhifDeduction(grossSalary) {
    if (grossSalary <= 5999) {
        return (150)
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
        return 300
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
        return 400
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
        return 500
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
        return 600
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
        return 750
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
        return 850
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
        return 900
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
        return 950
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
        return 1000
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
        return 1100
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
        return 1200
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
        return 1300
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
        return 1400
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
        return 1500
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
        return 1600
    } else {
        return 1700
    }
    
}
// NSSF Deduction

// After doing some research and checking the website provided by canvas there are several ways to pay for your nssf
// which include old rate where the company contributes a certain amount eg 200 and the employee contributes the same amount eg 200
// Tier 1 payment where 6% is deducted from the company and the employee up to ksh 6000 (applies where the company has another pension scheme)
// Tier 2 payment wher 6% is deducted from the comapany and the employee which is > 6000 and < 18000 of the pensionable pay
// I decided to settle for the tier 1 payment of 6% where the maximum amount defaults to ksh 6000  of the pensionable pay

function nssfDeduction(grossSalary) {
    const maxGrossSalary = 6000
    const nssfDeduction = grossSalary * 0.6
    if (grossSalary > maxGrossSalary) {
        return Math.floor(maxGrossSalary * 0.6)
    } else {
        return Math.floor(nssfDeduction)
    }
}

// Deducts the taxes using the functions stated above
function calculateNetSalary(grossSalary) {
    const netSalary = grossSalary - payeDeduction(grossSalary) - nhifDeduction(grossSalary) - nssfDeduction(grossSalary);
    console.log(`
    Gross Salary: ${grossSalary}\n
    PAYE: ${payeDeduction(grossSalary)}\n
    NHIF: ${nhifDeduction(grossSalary)}\n
    NSSF(Tier 1): ${nssfDeduction(grossSalary)}\n
    ------------------------------------\n
    Net Salary: ${netSalary}\n
    `)
}

module.exports={calculateNetSalary}