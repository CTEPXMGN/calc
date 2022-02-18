let operator;
let num1;
let num2;

button__C.onclick = function () {
    let result = document.getElementById('display');
    result.innerHTML = '';
} 
// Button 1
function btn1() {
    let num1 = document.getElementById('button__1');
    let result = document.getElementById('display');
    result.innerHTML += +num1.innerHTML;
}

function btnOne() {
    num1 = '1';
    console.log(num1);
}

button__1.addEventListener("click", btn1);
button__1.addEventListener("click", btnOne);
//Button 2
function btn2() {
    let num1 = document.getElementById('button__2');
    let result = document.getElementById('display');
    result.innerHTML += +num1.innerHTML;
}

function btnTwo() {
    num1 = '2';
    console.log(num1);
}

button__2.addEventListener("click", btn2);
button__2.addEventListener("click", btnTwo);

button__3.onclick = function () {
    let num1 = document.getElementById('button__3');
    let result = document.getElementById('display');
    result.innerHTML += +num1.innerHTML;
}

function sum() {
    let operator = document.getElementById('button__sum');
    let result = document.getElementById('display');
    result.innerHTML += operator.innerHTML;
}

function operatorSum() {
    operator = '+';
    console.log(operator);
}

button__sum.addEventListener("click", sum);
button__sum.addEventListener("click", operatorSum);

function Calc(operator, num1, num2) {
    
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'unknown operation';
    }
}

button_res.addEventListener("click", Calc(operator, num1, num2));