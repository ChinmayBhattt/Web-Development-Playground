const a = require("./mymodule.js")
console.log(a, __dirname);
console.log(__filename);


// import {a,b} from "./mymodule.js"
// console.log(a)
// import { avg } from "./mymodule.js"

// console.log(avg(4,6))
// import obj from "./mymodule.js"
// console.log(obj)

// // const http = require('node:http')

// import http from "http"
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World! </h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });