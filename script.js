let currentInput = '';

function appendInput(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        alert('Invalid Input');
        clearDisplay();
    }
}

function calculateSquare() {
    try {
        const number = parseFloat(currentInput);
        const result = number * number;
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        alert('Invalid Input');
        clearDisplay();
    }
}
