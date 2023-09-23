let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
  }
  function appendToDisplay(value) {
    const lastChar = displayValue.slice(-1);
  
    // Check if the last character is an operator and the new value is also an operator
    if (/[-+*/]/.test(lastChar) && /[-+*/]/.test(value)) {
      // Replace the last operator with the new one
      displayValue = displayValue.slice(0, -1) + value;
    } else {
      displayValue += value;
    }
  
    document.getElementById('display').value = displayValue;
  }