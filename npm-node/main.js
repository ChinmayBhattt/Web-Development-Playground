const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // make a public folder, and all files in the public folder user easily to access

// app.get, app.put, app.delete, app.post(path, headler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/service', (req, res) => {
  res.send('hackathons, workshops, sessions')
})
app.get('/about', (req, res) => {
  res.send('hackers unity is indias leading tech community')
})

app.get('/contact', (req, res) => {
  res.send('chinmay bhatt, phone no')
})
app.get('/blog/:slug', (req, res) => {
  console.log(req.params) //will output: { slug: 'helloworld' }
  console.log(req.query) // will output: { mode: 'dark', region: 'in' }
  res.send(`Hello ${req.params.slug}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
