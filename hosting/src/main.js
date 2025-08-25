const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
console.log(process.env.password)

app.get('/', (req, res)=>{
  res.send('Hello World')
})

app.listen(port, ()=>{
  console.log(`${port}`)
})