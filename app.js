
const pa = process.argv;

const operator = pa[2];
const algArg = pa[3];
let firstNum = parseInt(pa[3]);
let secondNum = parseInt(pa[4]);

const parseAlgebra = equation => {
  const xIndex = equation.indexOf("x");
  const equalsIndex = equation.indexOf("=");
  firstNum = parseInt(equation.substring(0, xIndex));
  secondNum = parseInt(equation.substring(xIndex + 2, equalsIndex));
  const thirdNum = parseInt(
    equation.substring(equalsIndex + 1, equation.length)
  );
  let result;
  for (let element of equation) {
    switch (element) {
      case "+":
        result = (thirdNum - secondNum) / firstNum;
        break;
      case "-":
        result = (thirdNum + secondNum) / firstNum;
        break;
      case "*":
        result = thirdNum / secondNum / firstNum;
        break;
      case "/":
        result = (thirdNum * secondNum) / firstNum;
        break;
    }
  }
  return result;
};

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
  case "exp":
    console.log(firstNum ** secondNum);
    break;
  case "algebra":
    console.log(parseAlgebra(algArg));
    break;
  default:
    console.log("input isn't understood");
}
