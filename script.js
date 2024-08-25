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
let currNum = "";

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

function update(currTotal) {
    resultsScreen.innerText = currTotal;
}

function clear() {
    expression = "";
    result = 0;
    resultsScreen.innerText = 0;
}

function positiveToNegative() { //check for expression
    if (result != 0) {
        result *= -1;
    }

    update(result);

    return result;
}

function convertToPercentage() {
    
}

function divide() {
    let lastChar = expression.charAt(expression.length - 1);

    if (/([*+-])/g.test(lastChar)) {
        expression = expression.replace(/.$/, '/');
        
    } else if (/([0-9])/g.test(lastChar)) {
        expression += "/";
    }
    console.log(expression);
    return
}

function button7Operation() {
    expression += "7";
    update(7);
    console.log(expression);
}

function button8Operation() {
    expression += "8";
    update(8);
    console.log(expression);
}

function button9Operation() {
    expression += "9";
    update(9);
    console.log(expression);
}

function multiply() {
    let lastChar = expression.charAt(expression.length - 1);

    if (/([/+-])/g.test(lastChar)) {
        expression = expression.replace(/.$/, '*');
        
    } else if (/([0-9])/g.test(lastChar)) {
        expression += "*";
    }
    console.log(expression);
    return
}

function button4Operation() {
    expression += "4";
    update(4);
    console.log(expression);
}

function button5Operation() {
    expression += "5";
    update(5);
    console.log(expression);
}

function button6Operation() {
    expression += "6";
    update(6);
    console.log(expression);
}

function subtract() {
    let lastChar = expression.charAt(expression.length - 1);

    if (/([*+/])/g.test(lastChar)) {
        expression = expression.replace(/.$/, '-');
        
    } else if (/([0-9])/g.test(lastChar)) {
        expression += "-";
    }
    console.log(expression);
    return
}

function button1Operation() {
    expression += "1";
    update(1);
    console.log(expression);
}

function button2Operation() {
    expression += "2";
    update(2);
    console.log(expression);
}

function button3Operation() {
    expression += "3";
    update(3);
    console.log(expression);
}

function add() {
    let lastChar = expression.charAt(expression.length - 1);

    if (/([*-/])/g.test(lastChar)) {
        expression = expression.replace(/.$/, '+');
        
    } else if (/([0-9])/g.test(lastChar)) {
        expression += "+";
    }
    console.log(expression);
    return
}

function button0Operation() {
    expression += "0";
    update(0);
    console.log(expression);
}

function addDecimal() {

}

function evaluateExpression() {

}