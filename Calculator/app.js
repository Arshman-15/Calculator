const display = document.getElementById('display');

// Adds the clicked button value to the display
function appendToDisplay(input) {
    display.value += input;
}

// Clears everything on the screen
function clearDisplay() {
    display.value = "";
}

// Deletes the last character entered
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculates the result using the eval() function
function calculate() {
    try {
        // eval() takes a string (like "2+2") and calculates it as math
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}