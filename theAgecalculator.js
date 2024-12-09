// The Age Calculator
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear, currentYear) {
    console.log(`You are ${currentYear - birthYear} old!`);
    return
}

let currentYear = new Date().getFullYear();

let imput1 = 1989;
let imput2 = 1995;
let imput3 = 2022;

// console.log(`You are ${calculateAge(imput1,currentYear)} old!`);


calculateAge(imput1,currentYear);
calculateAge(imput2,currentYear);
calculateAge(imput3,currentYear);