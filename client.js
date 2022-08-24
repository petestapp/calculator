$(document).ready(onReady);

function onReady() {
    console.log(`JQ`)
}

console.log(`javascripting`);

let firstNumber;
let firstNumberPicked = false;
let secondNumber;
let operator;
let operatorPicked = false;
let answer;

function clickButton() {
    console.log(`firstNumber:` + firstNumber);
    console.log(`firstNumberPicked: ` + firstNumberPicked);
    console.log(`operator: ` + operator);
    console.log(`operatorPicked: ` + operatorPicked);
    console.log(`secondNumber: ` + secondNumber);
}

function clearData() {
    firstNumber = undefined;
    firstNumberPicked = false;
    operator = false;
    operatorPicked = false;
    secondNumber = false;
}

function stageNumbers(el) {
    if (firstNumberPicked == false) {
        console.log(`button pressed: ` + el);
        // let num = firstNumber.push(el);
        firstNumber = Number(el);
        firstNumberPicked = true;
        // console.log(`num: ` + num);
        // firstNumber.push(el);
        console.log(`firstNumber: ` + firstNumber);
        $(`#screen`).empty().append(firstNumber);
    }
    else if (operatorPicked == false) {
        console.log(`operator has not been picked`);
        firstNumber = Number(el);
        console.log(`firstNumber: ` + firstNumber);
        $(`#screen`).empty().append(firstNumber);
    }
    else {
        secondNumber = Number(el);
        console.log(`secondNumber: ` + secondNumber);
        $(`#screen`).append(secondNumber);
    }
}

function stageOperator(el) {
    if (firstNumberPicked == false) {
        console.log(`pick a number first`);
    }
    else {
        operator = el;
        operatorPicked = true;
        console.log(`operator: ` + operator);
        $(`#screen`).append(operator);
    }
}

function completeOperation() {
    if (firstNumberPicked == 0 || operator == null || secondNumber == null) {
        console.log('error: add more info');
    }
    else if (operator == "divide") {
        answer = firstNumber / secondNumber;
        console.log(`answer: ` + answer);
        $(`#screen`).empty().append(answer);
    }
    else if (operator == "multiply") {
        answer = firstNumber * secondNumber;
        console.log(`answer: ` + answer);
        $(`#screen`).empty().append(answer);
    }
    else if (operator == "subtract") {
        answer = firstNumber - secondNumber;
        console.log(`answer: ` + answer);
        $(`#screen`).empty().append(answer);
    }
    else {
        answer = firstNumber + secondNumber;
        console.log(`answer: ` + answer);
        $(`#screen`).empty().append(answer);
    }
}