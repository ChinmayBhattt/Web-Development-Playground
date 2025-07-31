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

// let obj = {
//     name: "Chinmay",
//     role: "Engineer",
//     company: "Hacker's Unity"
    
// }

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

// let n = "Chinmay Bhatt";
// let new_n = n.trim("Bhatt ")
// console.log(new_n)
// console.log(n.charAt(0))
// console.log(n.indexOf("B"))


// let arr = [1,2,3,4,5,6];
// arr[0] = 32
// console.log(arr)
// console.log(arr[4])
// console.log(arr.length)
// console.log(typeof arr)

// let b = "Hello";
// b[0] = "y"
// console.log(b[0])

// console.log(arr.toString()); //convert to string
// console.log(arr.join(" and "))

// let a = [1,2,3,4,5];
// // console.log(a.pop())
// // console.log(a)

// // a.push(100)
// // console.log(a)
// // a.push("CB")
// // console.log(a)


// let b = [1,2,3,4,5];
// b.shift()
// console.log(b)
// b.shift()
// console.log(b)

// b.unshift("add")
// console.log(b)

// delete b[2];
// console.log(b)
// console.log(b.length)

// let a = [1,2,3,4];
// let b = [5,6,7,8];
// let c = [9,10,11,12];
// console.log(a.concat(b,c));

// let numbers = [1,2,3,4,5];

// console.log(numbers.splice(0,3))
// console.log(numbers)
// //add
// console.log(numbers.splice(0, 3, 33,44))
// console.log(numbers)

// let a = [1,2,3,4,5,6,7,8,9];

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element)
    
// }

// a.forEach((value, index, array) => {
//     console.log(value, index, array);
// });

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
        
//     }
// }

// for (const iterator of a) {
//     console.log(iterator)
// }


let arr = [2,5,7,8,9];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element**2);
}

console.log(newArr);