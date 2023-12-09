let trailingResults = 0;
operationOptions = ['decimal', 'divide', 'multiply', 'subtract', 'add' ];
let workingOperation = "";

// UPDATE DISPLAY

function updateDisplay(input) {

    let display = document.getElementById("display");
    let secondDisplay = document.getElementById("secondDisplay");

    if(display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
        if (input === "decimal") {
            display.innerHTML = "0."; 
        } else if (input === "negative-value") {
            if (display.innerHTML.indexOf("-1") === -1) {
                display.innerHTML = "-" + display.innerHTML;
            } else if (display.innerHTML.indexOf("-1") > -1) {
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            }
        } else {
            display.innerHTML = input;
            } 

    } else if (operationOptions.indexOf(input) >= 0) {
        if (trailingResults === display.innerHTML) {
            workingOperation = input;
        } else if(workingOperation === "") {
            console.log("Dealing without an operand")
            workingOperation = input;
            trailingResults = display.innerHTML; 
            display.innerHTML = 0;
        } else {
            trailingResults = calculate(trailingResults, display.innerHTML, workingOperation);
            secondDisplay.innerHTML = trailingResults;
            display.innerHTML = 0;
            workingOperation = input; 
        } 
    }    else if (input === "equals") {
            display.innerHTML = calculate(trailingResults, display.innerHTML, workingOperation);
            trailingResults = 0;
            workingOperation = "";
        } else if(input === "decimal") {
            // decimal clicked
            if(display.innerHTML.indexOf(".") === -1) {
                display.innerHTML += ".";
            }
        } //console.log("decimal skipped because decimal already in number")
        
        else if(input === "negative-value") {
            if(display.innerHTML.indexOf("-1") === -1) {
                display.innerHTML = "-" + display.innerHTML;
            } else if (display.innerHTML.indexOf("-1") >= -1) {
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            }
        } else {
            display.innerHTML += input; 
    }


// END OF FUNCTION 
}

// Clear function
function clearDisplay() {
    let display = document.getElementById("display");
    let secondDisplay = document.getElementById("secondaryDisplay");
    trailingResults = 0;
    display.innerHTML = 0;
    secondDisplay.innerHTML = trailingResults;
}

// Calculate function 
function calculate(firstNumber, secondNumber, operation){
    let result;

    firstNumber = parseFloat(firstNumber); 
    secondNumber = parseFloat(secondNumber); 

    switch(operation) {
    case "add":
        result = firstNumber + secondNumber;
        break;

    case "subtract":
        result = firstNumber - secondNumber;
        break;

    case "multiply":
        result = firstNumber * secondNumber;
        break;

    case "divide":
        result = firstNumber / secondNumber;
        break;

    default: 
        console.log("An error has accured");
        break; 
    }

    return result.toString();
}