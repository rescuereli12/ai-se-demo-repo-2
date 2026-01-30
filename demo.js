// returns sum

function add(a, b) {
  return a + b;
}
// returns difference

function subtract(a, b) {
  return a - b;
}
//  returns product

function multiply(a, b) {
  return a * b;
}
// returns quotient, throws error if b === 0

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

// ---- Helper Validation ----
function toNumber(value) {
  const num = Number(value);
  if (Number.isNaN(num)) {
    throw new Error("Please enter valid numbers.");
  }
  return num;
}

// ---- Main Calculator Logic ----
function calculate(num1, num2, operation) {
  const a = toNumber(num1);
  const b = toNumber(num2);

  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error("Invalid operation. Use +, -, *, or /.");
  }
}
console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2