const express = require('express')
const router = express.Router()
const Movies = require('../models/movie.model')

router.get('/', (req, res) => {   // Show all names of celebs
    Movies.find()
        .then(allMovies => res.render('movies/index', {allMovies}))
        .catch(err => console.log(`Error ${err}`))
})

router.get('/new', (req, res) => res.render('movies/new'))

router.post('/new', (req, res) => {     // create a new celebrity an redirects to celebrities
    const { title, genre, plot } = req.body
    Movies.create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(`Error ${err}`))
})

router.get('/:id/delete', (req, res) => {  
    const id = req.params.id

    Movies.findByIdAndRemove(id)
        .then(() => res.redirect('/movies'))
        .catch(() => console.log(`Error ${err}`))
})

router.get('/:id/edit', (req, res) => {
    const id = req.params.id

    //res.send("Hola")
    Movies.findByIdAndUpdate(id)
        .then(updateMovie => res.render('movies/edit', updateMovie))
        .catch(err => console.log(`Error ${err}`))
})

router.post('/:id/new', (req, res) => {
    const id = req.params.id
    const { title, genre, plot } = req.body
    Movies.findByIdAndUpdate(id, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(`Error ${err}`))
})


router.get('/:id', (req, res) => {
    const id = req.params.id

    Movies.findById(id)
        .then(singleMovie => res.render('movies/show', {singleMovie}))
        .catch(err => console.log(`Error ${err}`))
})

module.exports = router