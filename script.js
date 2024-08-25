let resultsScreen = document.querySelector('h2');
let acButton = document.getElementById('buttonac');
let negativePositiveButton = document.getElementById('button-positive-negative');
let percentageButton = document.getElementById('button-percentage');
let divideButton = document.getElementById('button-divide');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let multiplyButton = document.getElementById('button-multiply');
let button4 = document.getElementById('button4');
let button5= document.getElementById('button5');
let button6 = document.getElementById('button6');
let subtractButton = document.getElementById('button-subtract');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let addButton = document.getElementById('button-add');
let button0 = document.getElementById('button0');
let decimalButton = document.getElementById('button-decimal');
let equalsButton = document.getElementById('button-equals');
let result = 0;
let expression = "";

acButton.onclick = clear;
negativePositiveButton.onclick = positiveToNegative;
percentageButton.onclick = convertToPercentage;
divideButton.onclick = divide;
button7.onclick = button7Operation;
button8.onclick = button8Operation;
button9.onclick = button9Operation;
multiplyButton.onclick = multiply;
button4.onclick = button4Operation;
button5.onclick = button5Operation;
button6.onclick = button6Operation;
subtractButton.onclick = subtract;
button1.onclick = button1Operation;
button2.onclick = button2Operation;
button3.onclick = button3Operation;
addButton.onclick = add;
button0.onclick = button0Operation;
decimalButton.onclick = addDecimal;
equalsButton.onclick = evaluateExpression;

function update(result) {
    let strResult = result.toString();
    resultsScreen.innerText = strResult;
    console.log(strResult);
}

function clear() {
    expression = "";
    result = 0;
    resultsScreen.innerText = "0";
}

function positiveToNegative(result) {
    if (result != 0) {
        result *= -1;
    }

    update(result);

    return result;
}

function convertToPercentage() {
    
}

function divide() {

}

function button7Operation() {

}

function button8Operation() {

}

function button9Operation() {

}

function multiply() {

}

function button4Operation() {

}

function button5Operation() {

}

function button6Operation() {

}

function subtract() {

}

function button1Operation() {

}

function button2Operation() {

}

function button3Operation() {

}

function add() {

}

function button0Operation() {

}

function addDecimal() {

}

function evaluateExpression() {

}