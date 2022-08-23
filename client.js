console.log(`javascripting`);

let firstNumber;
let firstNumberPicked = false;
let secondNumber;
let operator;
let answer;

function clickButton() {
    console.log(`firstNumberPicked: ` + firstNumberPicked);
}

function stageNumbers(el) {
    if (firstNumberPicked == false) {
        console.log(`button pressed: ` + el);
        firstNumber = Number(el);
        console.log(`firstNumber: ` + firstNumber);
        firstNumberPicked = true;
    }
    else {
        secondNumber = Number(el);
        console.log(`secondNumber: ` + secondNumber);
    }
}

function stageOperator(el) {
    if (firstNumberPicked == false) {
        console.log(`pick a number first`);
    }
    else {
        operator = el;
        console.log(`operator: ` + operator);
    }
}

function completeOperation() {
    if (firstNumberPicked == 0 || operator == null || secondNumber == null) {
        console.log('error: add more info');
    }
    else if (operator == "divide") {
        answer = firstNumber / secondNumber;
        console.log(`answer: ` + answer);
    }
    else if (operator == "multiply") {
        answer = firstNumber * secondNumber;
        console.log(`answer: ` + answer);
    }
    else if (operator == "subtract") {
        answer = firstNumber - secondNumber;
        console.log(`answer: ` + answer);
    }
    else {
        answer = firstNumber + secondNumber;
        console.log(`answer: ` + answer);
    }
}