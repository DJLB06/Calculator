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
    displayBar.value = 7;
});

eightButton.addEventListener('click', e =>{
    displayBar.value = 8;
});

nineButton.addEventListener('click', e =>{
    displayBar.value = 9;
});

divideButton.addEventListener('click', e =>{
    displayBar.value = '/';
});

fourButton.addEventListener('click', e =>{
    displayBar.value = 4;
});

fiveButton.addEventListener('click', e =>{
    displayBar.value = 5;
});

sixButton.addEventListener('click', e =>{
    displayBar.value = 6;
});

multiplyButton.addEventListener('click', e =>{
    displayBar.value = '*';
});

oneButton.addEventListener('click', e =>{
    displayBar.value = 1;
});

twoButton.addEventListener('click', e =>{
    displayBar.value = 2;
});

threeButton.addEventListener('click', e =>{
    displayBar.value = 3;
});

minusButton.addEventListener('click', e =>{
    displayBar.value = '-';
});

zeroButton.addEventListener('click', e =>{
    displayBar.value = 7;
});

decimalButton.addEventListener('click', e =>{
    displayBar.value = '.';
});

equalsButton.addEventListener('click', e =>{
    displayBar.value = '=';
});

plusButton.addEventListener('click', e =>{
    displayBar.value = '+';
});












