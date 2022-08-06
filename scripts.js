let valueOne;
let valueTwo;
const operatorSet = new Set(['+','-','/','*']);
let currentOperator;

function add(number1,number2){
    return number1 + number2;
}

function subtract(number1,number2){
    return number1 - number2;
}

function multiply(number1,number2){
    return number1 * number2;
}

function divide(number1,number2){
    return number1 / number2;
}

function operate(number1,number2,operator){
    let value;

    switch(operator){
    case '+': 
        value = add(number1,number2);
        break;
    case '-': 
        value = subtract(number1,number2);
        break;
    case '*': 
        value = multiply(number1,number2);
        break;
    case '/': 
        value = divide(number1,number2);
        break;
   } 
   return value;
}

function assignValues(selectedValue){
   
    let finalValue;

    if(valueOne == undefined && operatorSet.has(selectedValue)){
        return;
    }

    if(selectedValue == '=' && (valueOne == undefined || currentOperator == undefined || valueTwo == undefined)){
        displayBar.value = 'ERROR';
        valueOne = undefined;
        valueTwo = undefined;
        currentOperator = undefined;
        return;
    }

    if(valueOne == undefined){
        valueOne = selectedValue;
        displayBar.value = valueOne;
        return;
    }

    if(operatorSet.has(selectedValue)){
        currentOperator = selectedValue;
        return;
    }

    if((valueOne != undefined) && currentOperator == undefined){
        valueOne = valueOne + selectedValue;
        displayBar.value = valueOne;
    }

   
    if((valueOne != undefined) && (currentOperator != undefined) && (valueTwo == undefined)){
        valueTwo = selectedValue;
        displayBar.value = valueTwo;
        return;
    }

    if((valueOne != undefined) && (currentOperator != undefined) && (valueTwo != undefined) && (selectedValue != '=')){
        valueTwo = valueTwo + selectedValue;
        displayBar.value = valueTwo;
    }

    if(selectedValue == '='){
        finalValue = operate(Number(valueOne), Number(valueTwo), currentOperator);
        displayBar.value = finalValue;
        valueOne = undefined;
        valueTwo = undefined;
        currentOperator = undefined;
    }

}


const displayBar = document.querySelector('#display-bar');

const sevenButton = document.querySelector('.seven-button');
const eightButton = document.querySelector('.eight-button');
const nineButton = document.querySelector('.nine-button');
const divideButton = document.querySelector('.divide-button');
const fourButton = document.querySelector('.four-button');
const fiveButton = document.querySelector('.five-button');
const sixButton = document.querySelector('.six-button');
const multiplyButton = document.querySelector('.multiply-button');
const oneButton = document.querySelector('.one-button');
const twoButton = document.querySelector('.two-button');
const threeButton = document.querySelector('.three-button');
const minusButton = document.querySelector('.minus-button');
const zeroButton = document.querySelector('.zero-button');
const decimalButton = document.querySelector('.decimal-button');
const equalsButton = document.querySelector('.equals-button');
const plusButton = document.querySelector('.plus-button');

sevenButton.addEventListener('click', e =>{
    
    assignValues('7');
});

eightButton.addEventListener('click', e =>{
   
    assignValues('8');
});

nineButton.addEventListener('click', e =>{
   
    assignValues('9');
});

divideButton.addEventListener('click', e =>{
    displayBar.value = '/';
    assignValues('/');
});

fourButton.addEventListener('click', e =>{
    assignValues('4');
});

fiveButton.addEventListener('click', e =>{
    assignValues('5');
});

sixButton.addEventListener('click', e =>{
    assignValues('6');
});

multiplyButton.addEventListener('click', e =>{
    displayBar.value = '*';
    assignValues('*');
});

oneButton.addEventListener('click', e =>{
    assignValues('1');
});

twoButton.addEventListener('click', e =>{
    displayBar.value = 2;
    assignValues('2');
});

threeButton.addEventListener('click', e =>{
    assignValues('3');
});

minusButton.addEventListener('click', e =>{
    displayBar.value = '-';
    assignValues('-');
});

zeroButton.addEventListener('click', e =>{
    assignValues('0');
});

decimalButton.addEventListener('click', e =>{
    displayBar.value = '.';
});

equalsButton.addEventListener('click', e =>{
   assignValues('=');
});

plusButton.addEventListener('click', e =>{
    displayBar.value = '+';
    assignValues('+');
});












