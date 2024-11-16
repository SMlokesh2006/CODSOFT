let displayValue = ""; // Stores the value shown on the display

// Append a number to the display
function appendNumber(number) {
  if (displayValue === "0" && number !== ".") {
    displayValue = ""; // Reset for new input
  }
  displayValue += number;
  updateDisplay();
}

// Append an operator to the display
function appendOperator(operator) {
  if (displayValue === "") return; // Prevent leading operators
  const lastChar = displayValue[displayValue.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) {
    // Replace operator if one is already at the end
    displayValue = displayValue.slice(0, -1);
  }
  displayValue += operator;
  updateDisplay();
}

// Calculate and display the result
function calculateResult() {
  try {
    displayValue = eval(displayValue).toString(); // Evaluate the expression
    updateDisplay();
  } catch {
    displayValue = "Error";
    updateDisplay();
  }
}

// Clear the display
function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

// Delete the last character
function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === "") displayValue = "0";
  updateDisplay();
}

// Update the display with the current value
function updateDisplay() {
  document.getElementById("display").textContent = displayValue;
}
