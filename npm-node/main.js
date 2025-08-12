const { error } = require("console")
const fs  = require("fs")
console.log(fs)

console.log("Starting")
// fs.writeFileSync("chinmay.txt", "This is a fs module file in js")
console.log("Ending")


//call back hell
fs.writeFile("chinmay1.txt","hello world", () =>{ // used this
    console.log(fs)
    fs.readFile("chinmay.txt", (error, data) =>{
        console.log(error, data.toString)
    })
})


fs.appendFile("chinmay.txt", "chinmaybhatt", (e, d)=>{ // error = e, data = d
    console.log(d)

})

fs.appendFile("hello.txt", "hello world" , (error, data)=>{
    console.log(d)

})