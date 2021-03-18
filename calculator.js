let currentNumber = 0;
let operations = [];
let numbers = [];

function click(buttonValue) {
    if (isNaN(parseInt(buttonValue))) {
        operator(buttonValue);
    }
    else {
        number(buttonValue);
    }
}

function number(number) {
    currentNumber = parseInt(currentNumber.toString() + number);
    document.querySelector("#screen").innerText = currentNumber;
}

function operator(operator) {
    if (operator === "C") {
        operations = [];
        numbers = [];
        currentNumber = 0;
    }
    else if (operator === "\u2190") {
        currentNumber = parseInt(currentNumber.toString().slice(0, currentNumber.toString().length - 1));
        if (isNaN(currentNumber)) {
            currentNumber = 0;
        }
    }
    else if (operator === "=") {
        numbers.push(currentNumber);
        currentNumber = math();
        operations = [];
        numbers = [];
    }
    else {
        operations.push(operator);
        numbers.push(currentNumber);
        currentNumber = 0;
    }
    document.querySelector("#screen").innerText = currentNumber;
    //console.log(numbers);
    //console.log(operations);
}

function math() {
    if (numbers.length > 0 && operations.length > 0) {
        let current = numbers[0];
        let currentIndex = 0;
        for (var i = 1; i < numbers.length; i++) {
            if (operations[currentIndex] == "+") {
                current += numbers[i]; //addition
            }
            else if (operations[currentIndex] == "\u2212") {
                current -= numbers[i]; //subtraction
            }
            else if (operations[currentIndex] == "\u00F7") {
                current /= numbers[i]; //division
            }
            else {
                current *= numbers[i]; //multiplication
            }
            currentIndex += 1;
        }
        return current;
    }
    else {
        return 0;
    }
}

document.querySelector('.calculator').addEventListener('click', function(event) {
    click(event.target.innerText);
});
