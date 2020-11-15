const express = require('express')
const router = express.Router()
const Movie = require('./../models/movie.model')

//Lista de peliculas
router.get('/', (req, res) => {
    
   Movie
        .find()                
       .then(allMovies => {
           res.render('movie/movie-list', { allMovies })
           console.log(allMovies)
       })   
        .catch(err => console.log(err))
})

router.get('/detalle/:movie_id', (req, res) => {
    const movieId = req.params.movie_id;
 
    

//Detalles
    Movie
        .findById(movieId)
        .then(theMovie => res.render('movie/details', theMovie))
        .catch(err => console.log(err))
})

//Añadir nuevas peliculas
router.get('/new', (req, res) => res.render('movie/newmovie'))
router.post('/new', (req, res) => {
    const { title, genre, plot } = req.body
    

    Movie
       .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))

})
//borrar
router.get('/delete', (req, res) => {

    const movieId = req.query.movie_id

    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})


//Editar

router.get('/edit-movie', (req, res) => {
const movieId = req.query.movie_id

    Movie
        .findById(movieId)
        .then(movieInfo => res.render('movie/editMovie', movieInfo))
        .catch(err => console.log(err))
})


router.post('/edit-movie', (req, res) => {


    const movieId = req.query.movie_id

    const { title, genre, plot } = req.body

    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(movieInfo => res.redirect('/movies'))
        .catch(err => console.log(err))
})




module.exports = router