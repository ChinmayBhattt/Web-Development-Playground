const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require('fs')

// app.use(express.static('public'))


app.use('/blog', blog)

// Middleware 1 - login(logger for a our application)
app.use((req, res, next) => {
    console.log(req.headers)
    req.chinmay = 'I am Chinmay'
    fs.writeFileSync("logs.txt", `${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`)
    // console.log('m1')
    // res.send("hellooo")
    next()
})

// app.use((req, res, next) => {
//     // console.log('m1')
//     res.send("hellooo")
//     // next()
// })

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.chinmay = 'I am Chinmay bhatt'
    next()
})

// jo baad me bana hai wo phle chalega


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/about', (req, res) => {
    res.send("About" + req.chinmay)
})

app.get('/contact/:slug', (req, res) => {
    res.send(`contact ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})