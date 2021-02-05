const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

//movies:

router.get('/movies/index',(req,res)=>{
  Movie.find()
  .then(moviesFromDB => res.render('movies/index',{movies: moviesFromDB}))
  
  .catch(err=> console.log(`Error while displaying celebrities: ${err}`))
})

// Add movies

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')

})

router.post('/movies/new', (req, res, ) => {
  const movie = new Movie (req.body)
  movie.save()
  .then(c => res.redirect('/movies/index'))
  .catch(e => res.redirect("/movies/new"))
})

//Delete movies

router.post('/movies/:id/delete',(req,res,next)=>{
  Movie.findByIdAndDelete(req.params.id)
  .then(()=> res.redirect('/movies/index'))
  .catch((e)=> next(e))

})

//Details movies:

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
    res.render ("movies/show", movie)
    })
    .catch((e) => next(e))
})

module.exports = router;