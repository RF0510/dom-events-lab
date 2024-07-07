/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
// Used ChatGPT
document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".button");
    let currentInput = "";
    let firstOperand = null;
    let operator = null;
    let shouldResetDisplay = false;
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const buttonText = button.textContent;
  
        if (button.classList.contains("number")) {
          if (shouldResetDisplay) {
            display.textContent = "";
            shouldResetDisplay = false;
          }
          currentInput += buttonText;
          display.textContent += buttonText;
        }
  
        if (button.classList.contains("operator")) {
          if (currentInput !== "") {
            if (firstOperand === null) {
              firstOperand = parseFloat(currentInput);
              display.textContent += ` ${buttonText} `;
            } else {
              const secondOperand = parseFloat(currentInput);
              const result = operate(firstOperand, operator, secondOperand);
              display.textContent = result;
              firstOperand = result;
            }
          }
          operator = buttonText;
          currentInput = "";
        }
  
        if (buttonText === "=") {
          if (firstOperand !== null && operator !== null && currentInput !== "") {
            const secondOperand = parseFloat(currentInput);
            const result = operate(firstOperand, operator, secondOperand);
            display.textContent = result;
            firstOperand = null;
            operator = null;
            currentInput = "";
            shouldResetDisplay = true;
          }
        }
  
        if (buttonText === "C") {
          display.textContent = "";
          currentInput = "";
          firstOperand = null;
          operator = null;
          shouldResetDisplay = false;
        }
      });
    });
  
    function operate(a, operator, b) {
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          return "Error";
      }
    }
  });
  