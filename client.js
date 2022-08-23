console.log(`javascripting`);

let firstNumber;
let firstNumberPicked = false;
let secondNumber;
let operator;

function clickButton() {
    console.log(`firstNumberPicked: ` + firstNumberPicked);
}

function stageNumbers(el) {
    if (firstNumberPicked == false) {
        console.log(`button pressed: ` + el);
        firstNumber = el;
        console.log(`firstNumber: ` + firstNumber);
        firstNumberPicked = true;
    } else {
        secondNumber = el;
        console.log(`secondNumber: ` + secondNumber);
    }
}

function stageOperator(el) {
    if (firstNumberPicked == false) {
        console.log(`pick a number first`);
    } else {
        operator = el;
        console.log(`operator: ` + operator);
    }
}