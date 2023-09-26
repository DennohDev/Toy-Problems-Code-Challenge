// Function to calculate net Salary from the gross salary


// Functions to calculate the tax deductions based on the net salary

// PAYE Function

function payeDeduction(grossSalary) {
    if (grossSalary <= 24000){
        return (24000 * 0.1)
    } else if ((grossSalary-24000)<=8333){
        return ((grossSalary - 24000)*0.25) + 2400
    } else if ((grossSalary-32333)<=467667){
        return ((grossSalary-32333)*0.3) + (8333*0.25) + 2400
    } else if((grossSalary-500000)<=300000){
        return ((grossSalary-500000)*0.325) + (467667*0.3) +(8333*0.25) + 2400
    } else{
        return (grossSalary*0.35)
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

function nssfDeductionTier1() {
    const pensionablePay = 6000
    const nssfDeduction = pensionablePay * 0.06
    return nssfDeduction
}

// Housing levy deduction
function housingLevyDeduction(grossSalary){
    return (grossSalary * 0.015)
}


// Deducts the taxes using the functions stated above
function calculateNetSalary(grossSalary) {
    // personal relief eases tax payment
    // Contribution benefit which is deducted from the taxable pay has been ignored in this program
    const personalRelief = 2400
    const payeDeducted = Math.floor(payeDeduction(grossSalary)) - personalRelief
    console.log(payeDeducted)
    const nhifDeducted = nhifDeduction(grossSalary)
    const nssfDeducted = nssfDeductionTier1()
    const housingLevy = Math.floor(housingLevyDeduction(grossSalary))
    

    const netSalary = grossSalary - payeDeducted - nhifDeducted - nssfDeducted - housingLevy 

    return (`
    Gross Salary: ${grossSalary}\n
    PAYE: ${payeDeducted}\n
    NHIF: ${nhifDeducted}\n
    NSSF(Tier 1): ${nssfDeducted}\n
    Housing Levy: ${housingLevy}\n
    ------------------------------------\n
    Net Salary: ${netSalary}\n
    `)
}

module.exports={calculateNetSalary}

