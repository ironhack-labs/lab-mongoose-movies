const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')
const Celebrity = require('./../models/celebrity.model')


//Data Movie
router.get('/listadoMovie', req, res) => {
    Celebrity.find()
    .then(allCelebrities => res.render('movies/movielist', {
        allMovies
    }))
    .catch(err => console.log("Error", err))
})

//Detalles Movies
router.get('/detalleMovie/:movieId', (req, res) => {
    Celebrity.findById(req.params.movieId)
    .then(theCelebrity => res.render('movies/moviedetails',theMovie))
    .catch(err => console.log("Error",err ))

})

//Crear movies
router.get('/crearMovie,' (req, res) => res.render('movies/create-movie-form'))

router.post('/crearMovie', (req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body
    Movie
       .create ({
           title,
           genre,
           plot
       })
       .then(() => res.redirect('listadoMovie'))
       .catch(err => console.log("Error", err))

    })

    //Borrar Movies
router.post('/:id/borrarMovie', (req,res) => {
   Celebrity.findByIdAndDelete(req.params.id)
   .then(theMovie => res.render('Movies/movielist', theMovie))
    .catch(err => console.log("Error", err))
})

//Editar
router.get('/editarMovie', (req,res) => {
    Celebrity
        .findById(req.query.movieId)
        .then(theMovie => res.render('movies/edit-movie-form', theMovie))
        .catch(err => console.log("Error", err))

    })

router.post('/editarMovie/:movieId', (req,res) => {
    const {
        title,
        genre,
        plot
    } = req.body

    Movie
    .findByIdAndUpdate(req.params.movieId, {
        title,
        genre,
        plot
    },{
        new: true
    })
    .then(() => res.redirect(`/movies/detalleMovie/${req.params.movieId}`))
    .catch(err => console.log("Error", err))

})

module.exports = router