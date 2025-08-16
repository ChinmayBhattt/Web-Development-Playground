const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send('Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About Blog')
})

// define the about route
router.get('/blogpost/:slug', (req, res) => { //127.0.0.1:3000/blog/blogpost/into-to-js
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router
