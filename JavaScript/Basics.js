// // alert("hello world")
// console.log("hey")
// console.log("code is running")

// var a = prompt("Enter your number");

// console.log("Your number is " + a);
// console.log("Your number is ", a);

// var isTrue = prompt("Your device is a mac?");

// if(isTrue == "Yes") {
//     console.log("my device is a mac")
// }else{
//         console.log("my device is a windows")
// }

// var isTrue1 = confirm("are you exit this site")

// if(isTrue1){
//     console.log("ok, this website is leave")
// }

// document.title = "Hey i am good"
// document.body.style.backgroundColor = 'blue'


// console.log("variable and data type")

// var a = 5;
// var b = 6;
// var c = "Chinmay"

// console.log(a + b);
// console.log(typeof a);

// const a1 = 6;
// a1 = 7;
// console.log(a1)
// not allowed


// locally scope
// let a = 4;

// {
//     let a = 6;
//     console.log(a)
// }
// console.log(a)


// locally scope
// var a = 4;

// {
//     var a = 6;
//     console.log(a)
// }
// console.log(a)


// let o = {
//     'Name': 'Chinmay',
//     'Age': 19
// }
// o.networth = "1Tillion";
// console.log(o);



// let a = 45;

// if(a > 18){
//     console.log("you can drive");
// }else{
//     console.log("You cant drive");
// }
// let c = 2
// let b = 3;

// console.log(c ** b)

// ternary operator

// let a = 5;
// let b = 4;
// let c = (a < b) ? (a - b) : (a + b)
// console.log(c)

// for (let i = 0; i < 20; i++) {
//    console.log(i + 1);
    
// }

let obj = {
    name: "Chinmay",
    role: "Engineer",
    company: "Hacker's Unity"
    
}

// for (const key in obj) {
    
//         const element = obj[key];
//         // console.log(key);
//         // console.log(element);
//         // console.log(key, element);
        
    
// }

// for (const i of "Chinmay") {
//     console.log(i);
// }

// let i = 0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// function add(name) {
//     console.log("Hi, How are you " + name);
// }

// add("Chinmay");

// function sum(a, b, c =3){
//     // console.log(a + b);
//     return a + b + c;
// }

// result = sum(5,3);
// result1 = sum(5);
// console.log(result);
// console.log(result1);

// let a = prompt("Enter a number");
// console.log("Your number is: ");


// ------------String----------------

// let a = "Chinmay";

// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);
// console.log(a[7]);
// console.log(a.length)

// let real_name = "Chinmay";
// let surname = "Bhatt";
// console.log(real_name + " " + surname);
// // template literals
// console.log(`${real_name} ${surname}`);

// let c = "chinmay";
// let d = "bhatt";
// console.log(c.toUpperCase())
// console.log(c.toLowerCase())
// console.log(c.slice(1, 3))
// console.log(c.slice(1))
// console.log(c.replace('ch', 'a'))
// console.log(c.concat(d));
// console.log(c.concat("bhatt"));

let n = "Chinmay Bhatt";
let new_n = n.trim("Bhatt ")
console.log(new_n)
console.log(n.charAt(0))
console.log(n.indexOf("B"))
