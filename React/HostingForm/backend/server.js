// const express = require('express')
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send('Hello world')
} )

app.post('/', (req,res)=>{
    console.log(req.body )
    res.send('Hello world')
})

app.listen(port, ()=>{
    console.log(`${port}`)
})