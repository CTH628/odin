const add = function(a, b) {
  temporary =  parseFloat(a) + parseFloat(b);
  return Math.round(temporary * 1000) / 1000;
};
  
const subtract = function(a, b) {
  return Math.round((a - b) * 1000) / 1000;
};
  
const sum = function(a, b) {
  return Math.round((a * b) * 1000) / 1000;
};

const divide = function(a, b) {
  
  if (b != 0) {
    return Math.round((a / b) * 1000) / 1000;
  } else {
    return "Nope";
  }
};

const operate = function(operator, a, b) {
  if (operator == "+") {
      return add(a, b);
  } else if (operator == "-") {
      return subtract(a, b);
  } else if (operator == "*") {
      return sum(a, b);
  } else if (operator == "/") {
      return divide(a, b);
  }
}

let currentDisplayValue = "";
let currentOperator = "";
let storedValue = "";
let currentSmallDisplayValue = ""

const display = document.querySelector("#display")
const smallDisplay = document.querySelector("#smallDisplay")

// number buttons
const populateDisplay = function(string) {
  
  currentDisplayValue += string;
  currentSmallDisplayValue += string;

  display.textContent = currentDisplayValue;
  smallDisplay.textContent = currentSmallDisplayValue;
}

const button0 = document.querySelector("#button0")
button0.addEventListener('click', function() {
  return populateDisplay("0");
})

const button1 = document.querySelector("#button1")
button1.addEventListener('click', function() {
  return populateDisplay("1");
})

const button2 = document.querySelector("#button2")
button2.addEventListener('click', function() {
  return populateDisplay("2");
})

const button3 = document.querySelector("#button3")
button3.addEventListener('click', function() {
  return populateDisplay("3");
})

const button4 = document.querySelector("#button4")
button4.addEventListener('click', function() {
  return populateDisplay("4");
})

const button5 = document.querySelector("#button5")
button5.addEventListener('click', function() {
  return populateDisplay("5");
})

const button6 = document.querySelector("#button6")
button6.addEventListener('click', function() {
  return populateDisplay("6");
})

const button7 = document.querySelector("#button7")
button7.addEventListener('click', function() {
  return populateDisplay("7");
})

const button8 = document.querySelector("#button8")
button8.addEventListener('click', function() {
  return populateDisplay("8");
})

const button9 = document.querySelector("#button9")
button9.addEventListener('click', function() {
  return populateDisplay("9");
})

// calculations
const useOperators = function(string) {
  currentSmallDisplayValue += string;
  smallDisplay.textContent = currentSmallDisplayValue;

  if (currentDisplayValue != "" & storedValue != "") {
    
    storedValue = operate(currentOperator, storedValue, currentDisplayValue);
    currentDisplayValue = "";
    currentOperator = string;

    display.textContent = currentDisplayValue;

  } else {
  
    currentOperator = string;

    storedValue = currentDisplayValue;
    currentDisplayValue = "";

    display.textContent = currentDisplayValue;
  }
}

const buttonAdd = document.querySelector("#buttonAdd")
buttonAdd.addEventListener('click', function() {
  return useOperators("+")
})

const buttonDivide = document.querySelector("#buttonDivide")
buttonDivide.addEventListener('click', function() {
  return useOperators("/")
})

const buttonSum = document.querySelector("#buttonSum")
buttonSum.addEventListener('click', function() {
  return useOperators("*")
})

const buttonSubtract = document.querySelector("#buttonSubtract")
buttonSubtract.addEventListener('click', function() {
  return useOperators("-")
})

// clear & =
const buttonEqual = document.querySelector("#buttonEqual")
buttonEqual.addEventListener('click', function() {
  currentDisplayValue = operate(currentOperator, storedValue, currentDisplayValue)
  currentSmallDisplayValue = currentDisplayValue;

  storedValue = ""
  display.textContent = currentDisplayValue;
  smallDisplay.textContent = currentSmallDisplayValue;
})

const buttonClear = document.querySelector("#buttonClear")
buttonClear.addEventListener('click', function() {
  currentDisplayValue = "";
  currentSmallDisplayValue = "";
  currentOperator = "";
  storedValue = "";

  display.textContent = currentDisplayValue;
  smallDisplay.textContent = currentSmallDisplayValue;
})