
let calculator;

let a = 2
let b = 6

let result;

if (calculator == '+') {
    result = a + b;
}
else if (calculator == '-') {
    result = a - b;
}
else if (calculator == '*') {
    result = a * b;
}
else {
    result = a / b;
}

// display the result
console.log(`${a} ${calculator} ${b} = ${result}`);