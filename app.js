let currentInput = "";

function appendValue(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function clearResult() {
  currentInput = "";
  document.getElementById("result").value = "";
}

function calculateResult() {
  try {
    // Use eval to calculate the result
    const result = eval(currentInput);
    document.getElementById("result").value = result;
    currentInput = result.toString(); // Update currentInput for further calculations
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentInput = "";
  }
}
