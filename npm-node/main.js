const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.send("Hello world2")
})

app.get('/about', (req, res)=>{
    res.send("About")
})

app.get('/contact/:slug', (req, res)=>{
    res.send(`contact ${req.params.slug}`)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})