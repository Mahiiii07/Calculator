let firstNum = 0;
let secondNum = 0;
let result = 0;
let selectedOperator = null;

const display = document.querySelector(".text-box");
const buttons = document.querySelectorAll("button");


buttons.forEach((btn) => {
  btn.addEventListener("click", () => handleButtonClick(btn.textContent.trim()));
});

function handleButtonClick(value) {
  if (!isNaN(value) || value === ".") {
    handleNumber(value);
  } else if (["+", "-", "x", "/"].includes(value)) {
    handleOperator(value);
  } else if (value === "=") {
    calculateResult();
  } else if (value === "AC") {
    clearAll();
  } else if (value === "+/-") {
    toggleSign();
  } else if (value === "%") {
    calculatePercentage();
  }
}

// ---------------- Logic functions ----------------

function handleNumber(value) {
  if (value === "." && display.value.includes(".")) return;

  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function handleOperator(operator) {
  firstNum = parseFloat(display.value);
  selectedOperator = operator;
  display.value = "0";
}

function calculateResult() {
  if (selectedOperator === null) return;

  secondNum = parseFloat(display.value);
  switch (selectedOperator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "x":
      result = firstNum * secondNum;
      break;
    case "/":
      result = secondNum === 0 ? "Error" : firstNum / secondNum;
      break;
    default:
      result = display.value;
  }
  display.value = result.toString();
  selectedOperator = null; 
}

function clearAll() {
  display.value = "0";
  firstNum = 0;
  secondNum = 0;
  result = 0;
  selectedOperator = null;
}

function toggleSign() {
  display.value = (parseFloat(display.value) * -1).toString();
}

function calculatePercentage() {
  display.value = (parseFloat(display.value) / 100).toString();
}