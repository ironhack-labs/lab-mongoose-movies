const express = require('express')
const router = express.Router()


const Movies = require('../models/movie.model')



router.get('/', (req, res) => {

    Movies.find()
        .then(movies => res.render('movies/index', { movies }))
        .catch(err => console.log('ERROR:', err))
})





router.get('/new', (req, res) => res.render('movies/new'))
router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movies.create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('ERROR:', err))


})

router.post('/:celes_id/delete', (req, res) => {

    const id = req.params.celes_id

    Movies.findByIdAndRemove(id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('ERROR:', err))
})




router.get('/:movie_id/edit', (req, res) => {

    const id = req.params.movie_id

    Movies.findById(id)
        .then(theFullMoviesDetails => res.render('movies/edit', theFullMoviesDetails))
        .catch(err => console.log('ERROR:', err))
})


router.post('/:movie_id', (req, res) => {

    const id = req.params.movie_id
    const { title, genre, plot } = req.body

    Movies.findByIdAndUpdate(id, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(('ERROR:', err)))
})



router.get('/:movie_id', (req, res) => {

    const id = req.params.movie_id

    Movies.findById(id)
        .then(theFullMoviesDetails => res.render('movies/show', theFullMoviesDetails))
        .catch(err => console.log('ERROR:', err))
})



module.exports = router