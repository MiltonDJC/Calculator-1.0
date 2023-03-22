let n1 = prompt('Write the first number');
let n2 = prompt('Write the second number');
let operation = prompt('Write: +, -, * or /');

const addition = (x, y) => {
    x = parseInt(x);
    y = parseInt(y);
    let result = x + y;
    return result;
}
const subtraction = (x, y) => {
    x = parseInt(x);
    y = parseInt(y);
    let result = x - y;
    return result;
}
const multiply = (x, y) => {
    x = parseInt(x);
    y = parseInt(y);
    let result = x * y;
    return result;
}
const division = (x, y) => {
    x = parseInt(x);
    y = parseInt(y);
    let result = x / y;
    return result;
}

switch (operation) {
    case '+':
    alert(`The result of your operation is ${addition(n1, n2)}`);
        break;
    case '-':
    alert(`The result of your operation is ${subtraction(n1, n2)}`);
        break;
    case '*':
    alert(`The result of your operation is ${multiply(n1, n2)}`);
        break;
    case '/':
    alert(`The result of your operation is ${division(n1, n2)}`);
        break;
    default:
    alert(`The operation was misspelled`);
        break;
}