const { Template } = require('ejs');
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// res.render() - render a view Template

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = [siteName,43,55]
    res.render("index", {siteName: siteName, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when"
    let blogContent = "its a very good brand"
//   res.sendFile("templates/index.html", {root: __dirname})
  res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
