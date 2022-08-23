console.log(`javascripting`);

let firstNumber;
let secondNumber;
let operator;

function clickButton() {
    console.log(button.value + ` clicked`);
}

function stageFirstNumber(el) {
    console.log(`button pressed: ` + el);
    firstNumber = el;
    console.log(`firstNumber: ` + firstNumber);
}

function stageOperator(el) {
    console.log(`operator pressed: ` + el);
}