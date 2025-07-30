// Q1 Faulty Calculator
// let n1 = Number(prompt("Enter the Number 1:"));
// let n2 = Number(prompt("Enter the Number 2:"));
// let op = prompt("Enter the Operator (+, -, *, /):");
 

// if(op == '+') {
//     console.log(n1 - n2);
// } 
// else if(op == '*') {
//     console.log(n1 + n2);

// }
// else if(op == '-') {
//     console.log(n1 / n2);

// }
// else if(op == '/') {
//     console.log(n1 ** n2);

// }else{
//     console.log('Nan');
// }
//--------//--------//--------//--------//--------//--------//--------

let random = Math.random();
let a = prompt("Enter First Number: ");
let c = prompt("Enter Operation: ");
let b = prompt("Enter Second Number: ");

let obj = {
    '+': '-',
    '*': '+',
    '-': '/',
    '/': '**'
}

    
    
    if(random > 0.1){
        //perform correct calculation
        alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
    
    }else{
        //perform wrong calculation
    
        c = obj[c];
    }

