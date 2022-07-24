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

