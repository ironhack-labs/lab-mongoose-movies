const express = require('express')
const router = express.Router()

const Movie = require('./../model/movie')



//Listado Movies

router.get('/', (req, res) => {

   Movie
        .find()
        .then(allMovies => res.render('movies/movies-list', { allMovies }))   
        .catch(err => console.log(err))
})



 //Detalle Movies

router.get('/show-details/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/show-details', theMovie))
        .catch(err => console.log(err))
})



//Añadir Película: Formulario (GET)

router.get('/new-movie', (req, res) => res.render('movies/new-movie'))

//Añdir Película: Formulario (POST)

router.post('/new-movie', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))
})



// Eliminar Película

router.get('/Eliminar-movies', (req, res) => {

    const movieId = req.query.movie_id

  Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})



// Editar Película: Renderizar (GET)
router.get('/Editar-movies', (req, res) => {

    const movieId = req.query.movie_id

    Movie
        .findById(movieId)
        .then(movieInfo => res.render('movies/edit-movie', movieInfo))
        .catch(err => console.log(err))
})

// Editar Película: Gestionar (POST)

router.post('/Editar-movies', (req, res) => {

    const movieId = req.query.movie_id                            

    const { title, genre, plot } = req.body     

   Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(movieInfo => res.redirect('/movies'))
        .catch(err => console.log(err))
})

module.exports = router
