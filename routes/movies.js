const express = require('express')
const router = express.Router()
const Movies = require('../models/movie');

// Endpoints



router.get('/', (req, res) => {
    Movies
        .find()
        .then(movies => {
            res.render('movies/movies', { movies })
   

        })
})
router.get('/new', (req, res) => {
    res.render('movies/new-form')
})
router.post('/new', (req, res) => {
    const { title, genre, plot } = req.body
   
    
    Movies
        .create(
            {
                title: title,
                genre: genre,
                plot:plot
        }
    )
        .then(movie => {
        res.render('movies/detailMovie', movie)
    })


})


router.post('/:idmovie/delete', (req, res) => {
    const movies = req.params.idmovie
    Movies
        .findByIdAndDelete(movies)
        .then(result => {
            res.redirect('/movies')
    })
        .then(res.redirect('/movies'))
})


router.get('/:idmovie/edit', (req, res) => {
    const idmovie = req.params.idmovie
Movies
        .findById(idmovie)
    .then(movie => { res.render('movies/edit-form', movie) })

})


router.post('/:idmovie/edit', (req, res) => {
    const idmovie = req.params.idmovie
    const { title, genre, plot } = req.body

 
    Movies
        .findByIdAndUpdate(idmovie, {
            title: title,
            genre: genre,
            plot: plot
        }, { new: true })
        .then(movie => {
            res.render('movies/detailMovie', movie)
        })

})


router.get('/:idmovie', (req, res) => {
    const idmovie = req.params.idmovie

    Movies
        .findById(idmovie)
        .then(movie => res.render('movies/detailMovie', movie))
    
})

module.exports = router
