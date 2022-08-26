$(document).ready(onReady);

function onReady() {
    console.log(`JQ`)
}

let firstNumberArray = [];
let firstNumber;
let firstNumberPicked = false;
let secondNumberArray = [];
let secondNumberPicked = false;
let secondNumber;
let operator;
let operatorPicked = false;
let answer;
let firstDecimalPointPresent = false;
let secondDecimalPointPresent = false;

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

// let multipleDigits = [];

// function multipleDigitTest(el) {
//     let num = multipleDigits.push(el);
//     console.log(`multipleDigits: ` + multipleDigits.join(''));
//     $(`#multipleDigits`).empty().append(Number(multipleDigits.join('')));
//     if (firstDecimalPointPresent == false) {
//         console.log(`multipleDigits: ` + multipleDigits);
//         $(`#multipleDigits`).empty().append(Number(multipleDigits.join('')));
//     }
//     else {
//         console.log(`can't do that`)
//     }
// }

function stageNumbers(el) {
    if (firstNumberPicked == false) {
        // if firstNumber has not been set, go to next if statement
        if (firstDecimalPointPresent == false) {
            // if there is no decimal point specified yet, go to next if statement
            if (el == `.` && firstNumberArray.length == 0) {
                // if '.' is selected before any digits have been selected, ERROR
                console.log(`select a digit first`);
            }
            else if (el == `.`) {
                // if '.' is selected after any digits, add the decimal point to the array and set firstDecimalPointPresent to true to prevent another decimal point from being selected
                firstDecimalPointPresent = true;
                firstNumberArray.push(el);
            }
            else {
                // if your just pressing digits, there is no problem adding them to the array
                firstNumberArray.push(el);
            }
        }
        else {
            // if a decimal point has been selected, you cannot do another one
            // (try to figure out a way to consolidate this with the above logic that's the same)
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
    else {
        // this is the same logic as the first number in the function
        // (another place to consolidate?)
        if (secondDecimalPointPresent == false) {
            if (el == `.` && secondNumberArray.length == 0) {
                console.log(`select a digit first`);
            }
            else if (el == `.`) {
                secondDecimalPointPresent = true;
                secondNumberArray.push(el);
            }
            else {
                secondNumberArray.push(el);
            }
        }
        else {
            if (el == `.`) {
                console.log(`can't have more than one decimal point`);
            }
            else {
                secondNumberArray.push(el);
            }
        }
        $(`#screen`).empty().append(secondNumberArray);
        console.log(secondNumberArray);
    }
}

function stageOperator(el) {
    if (firstNumberArray.length == 0) {
        // you cannot set the operator before selecting first number
        console.log(`pick a number first`);
    }
    else {
        // if the first number has been selected this transforms it from an array to a number and saves it as firstNumber and sets the operator
        firstNumber = Number(firstNumberArray.join(''));
        operator = el;
        operatorPicked = true;
        firstNumberPicked = true;
        console.log(`operator: ` + operator);
        $(`#screen`).append(operator);
    }
}

function completeOperation() {
    secondNumber = Number(secondNumberArray.join(''));
    // once the equals sign is pressed this saves the secondNumber as a number rather than an array and the below lines complete the operation depending on the operator
    console.log(`secondNumber: `, secondNumber);
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