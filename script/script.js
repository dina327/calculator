function addToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function deleteLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function resetDisplay() {
    let display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.value;
    expression = expression.replace(/x/g, '*');

    try {
        let result = eval(expression);
    
        // Correctly use logical operators to check for invalid results
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            throw new Error("Invalid calculation");
        }
    
        // Update the display with the valid result
        display.value = result;
    } catch (error) {
        // Display a user-friendly error message
        display.value = "Error: " + error.message;
    }
}    