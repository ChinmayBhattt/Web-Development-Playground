const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000;

app.use('/blog', blog)
app.use(express.static('public'))

app.get('/', (req, res)=>{
    console.log('its a get request')
    res.send("Hello World2")
})

app.post('/', (req, res)=>{
    console.log('its a post request')
    res.send("Hello world post")
})

app.put('/', (req, res)=>{
    console.log('its a put request')
    res.send("Hello world put 2")
})

app.delete('/', (req, res)=>{
    console.log('its a delete request')
    res.send("Hello world delete")
})

app.get('/index', (req, res)=>{
    console.log("index file")
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req, res)=>{
    res.json({a: 1, b:2, c:3, d: 4})
})

// app.get('/', (req, res)=>{
//     console.log('its a get request')
//     res.send("Hello World")
// }).post('/', (req, res)=>{
//     console.log('its a post request')
//     res.send("Hello world post")
// }).put('/', (req, res)=>{
//     console.log('its a put request')
//     res.send("Hello world put")
// })

// app.delete('/', (req, res)=>{
//     console.log('its a delete request')
//     res.send("Hello world delete")
// })

// app.get('/', (req, res)=>{
//     console.log('its a get request')
//     res.send("Hello World")
// }).post('/', (req, res)=>{
//     console.log('its a post request')
//     res.send("Hello world post")
// }).put('/', (req, res)=>{
//     console.log('its a put request')
//     res.send("Hello world put")
// }).delete('/', (req, res)=>{
//     console.log('its a delete request')
//     res.send("Hello world delete")
// })

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})