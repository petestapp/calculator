$(document).ready(onReady);

function onReady() {
    console.log(`JQ`)
}

let firstNumberArray = [];
let firstNumber;
let firstNumberPicked = false;
let secondNumber;
let operator;
let operatorPicked = false;
let answer;
let firstDecimalPointPresent = false;

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

let multipleDigits = [];

function multipleDigitTest(el) {
    let num = multipleDigits.push(el);
    console.log(`multipleDigits: ` + multipleDigits.join(''));
    $(`#multipleDigits`).empty().append(Number(multipleDigits.join('')));
    if (firstDecimalPointPresent == false) {
        console.log(`multipleDigits: ` + multipleDigits);
        $(`#multipleDigits`).empty().append(Number(multipleDigits.join('')));
    }
    else {
        console.log(`can't do that`)
    }
}

function stageNumbers(el) {
    // multipleDigitTest(el);
    if (firstNumberPicked == false) {
        // // firstNumber = Number(el);
        // console.log(`firstNumber: ` + firstNumber);
        if (firstDecimalPointPresent == false) {
            if (el == `.` && firstNumberArray.length == 0) {
                console.log(`select a digit first`);
            }
            else if (el == `.`) {
                firstDecimalPointPresent = true;
                firstNumberArray.push(el);
                console.log('firstDecimalPointPresent: ', firstDecimalPointPresent);
            }
            else {
                firstNumberArray.push(el);
            }
        }
        else {
            if (el == `.`) {
                console.log(`can't have more than one decimal point`);
            }
            else {
                firstNumberArray.push(el);
            }
        }
        $(`#screen`).empty().append(firstNumberArray);
        console.log(firstNumberArray);
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
    if (firstNumberArray.length == 0) {
        console.log(`pick a number first`);
    }
    else {
        firstNumber = Number(firstNumberArray.join(''));
        operator = el;
        operatorPicked = true;
        firstNumberPicked = true;
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