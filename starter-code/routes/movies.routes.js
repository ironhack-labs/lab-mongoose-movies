const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')


// Listado de celebrities
router.get('/list', (req, res, next) => {
  Movie.find({})
    .then(allTheMovies => res.render('movies-list', { movies: allTheMovies }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/details/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .populate('celebrity')
    .then(movieInfo => {
      res.render('movie-detail', { detail: movieInfo })
      console.log(movieInfo)
    })
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/create', (req, res, next) => res.render('movies-add'))
router.post('/create', (req, res, next) => {

  const {celebrity, name, genre, plot } = req.body

  Movie.create({ celebrity, name, genre, plot  })
    .then(() => res.redirect('/movies/list'))
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/remove/:id',(req,res,next) => {
  const movieId = req.params.id
  console.log(req.params)
  Movie.findByIdAndRemove(movieId)
    .then(x => res.redirect('/movies/list'))
    .catch(err => console.log('Hubo un error:', err))
  })

  router.get('/edit', (req, res, next) => {
    //console.log(req.query)
    Movie.findById(req.query.movId)
      .then(theMovie => res.render('movies-edit', { theMovie }))
      .catch(err => console.log('Hubo un error:', err))
  })
  router.post('/edit', (req, res, next) => {
  
    const {celebrity, name, genre, plot } = req.body
  
    // Todos los métodos de actualizar pueden recibir {new: true} como último argumento opcional, retornando el nuevo elemento y no el previo al update
    Movie.findByIdAndUpdate(req.query.movId, { $set: { celebrity, name, genre, plot  } }, { new: true })
      .then(theNewMovie => {
        console.log(theNewMovie)
        res.redirect('/movies/list')
      })
      .catch(err => console.log('Hubo un error:', err))
  })
module.exports = router
