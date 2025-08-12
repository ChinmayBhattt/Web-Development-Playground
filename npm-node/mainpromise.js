import fs from "fs/promises"
// const fs = require("fs/promises")
let a = await fs.readFile("chinmay.txt")
console.log(a.toString)

let b = await fs.writeFile("chinmay.txt", "\t\t\t\ hello world how are you");
console.log(b)

let c = await fs.appendFile("chinmay.txt", "add this file")
console.log(c)