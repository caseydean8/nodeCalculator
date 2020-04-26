// * Create a command-line node application that takes in parameters like this:

//   * `node calculator.js add 1 2` ... and outputs 3
//   * `node calculator.js subtract 5 2` ... and outputs 3
//   * `node calculator.js multiply 3 2` ... and outputs 6
//   * `node calculator.js divide 8 2` ... and outputs 4
//   * `node calculator.js remainder 7 2`... and outputs 1

// ### Bonuses

// * Enable your calculator application to also handle the below cases:

//   * `node calculator.js exp 7 2` ... and output 49 (7 squared)
//   * `node calculator.js algebra 4x+2=10`... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)
const pa = process.argv;

let operator = pa[2];
let firstNum = parseInt(pa[3]);
let secondNum = parseInt(pa[4]);

switch (operator) {
  case "add":
    console.log(firstNum + secondNum);
    break;
  case "subtract":
    console.log(firstNum - secondNum);
    break;
  case "multiply":
    console.log(firstNum * secondNum);
    break;
  case "divide":
    console.log(firstNum / secondNum);
    break;
  case "remainder":
    console.log(firstNum % secondNum);
    break;
}
