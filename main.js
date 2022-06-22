const number1 = parseFloat(prompt('Enter First Number'))
const number2 = parseFloat(prompt('Enter Second Number'))
const Operator = prompt('Enter Operator(either + ,- , / ,* )');

if (isNaN(number1)) {
    alert('Input 1 is not a number')
}
if (isNaN(number2)) {
    alert('Input 2 is not a number')
}

let result;

if (Operator == '+') {
    result = number1 + number2;
} else if (Operator == '-') {
    result = number1 - number2
} else if (Operator == '*') {
    result = number1 * number2
} else {
    result = number1 / number2
}

console.log(`${number1} ${Operator} ${number2} = ${result}`);
document.write(`${number1} ${Operator} ${number2} = ${result}`);



// if (Operator = '+') {
//     console.log(a + b);
// }

// if (Operator = '-') {
//     console.log(a - b);
// }
// // if (Operator = '/') {
// //     console.log(a / b);
// // }
// // if (Operator = '*') {
// //     console.log(a * b);
// // }