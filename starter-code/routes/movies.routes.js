const express = require('express')
const router  = express.Router()
const Movie = require('../models/movie.model')

//Nombres de los Peliculas
router.get('/list', (req, res, next) => {

    Movie.find()
    .then(allmovies => res.render('moviess/movies-list',{movie: allmovies}))
    .catch(err => console.log("Error consultando los famosos en la BBDD: ", err))
  })

// Borrado de pelicula
router.post('/:id/delete' , (req,res) => {
  
    const movieId = req.params.id
  
    Movie.findByIdAndDelete(movieId)
    .then(() => res.redirect('/moviess/list'))
    .catch(err => console.log("Error borrando la pelicula en la BBDD: ", err))
  
  })

//Detalles de las peliculas
router.get('/details/:id',(req, res) => {

    const movieId = req.params.id
    
    Movie.findById(movieId)
      .then(theMovie => res.render('moviess/movie-details', theMovie))
      .catch(err => console.log("Error consultando la pelicula en la BBDD: ", err))
  })

router.get('/add', (req, res) => res.render('moviess/movies-new'))
router.post('/add', (req, res) => {
  
    const { title, genre, plot } = req.body
  
    Movie.create({ title, genre, plot})
      .then(() => res.redirect('/moviess/list'))
      .catch(err => console.log(err))
})

// Editar pelicula
router.get('/edit', (req, res) => {

    const moviesId = req.query.id
  
    Movie.findById(moviesId)
      .then(theCelebrity => res.render('moviess/movies-edit', theCelebrity))
      .catch(err => console.log(err))
  })
  
  router.post('/edit/:id', (req, res) => {
    
    const moviesId = req.params.id
  
    Movie.findByIdAndUpdate(moviesId, req.body)
      .then(x => res.redirect(`/moviess/details/${moviesId}`))
      .catch(err => console.log(err))
  })

module.exports = router