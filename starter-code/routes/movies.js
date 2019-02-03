const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')
const bodyParser = require('body-parser')

//MOVIE ROUTES 

// movies list page 
router.get('/movies/list', (req,res,next) => {
  Movie.find()
  .then( movieData => {
    res.render('movies/list', { movieData })
  })
  .catch(err => console.log('Error', err))
})

//create new moviews
router.get('/newMovie', (req, res, next) => {
  res.render('movies/add')
})

router.post('/newMovie', (req, res, next) => {
  const { title,genre,plot } = req.body
  const newMovie = new Movie({ title,genre,plot })
  newMovie.save()
  .then(() => {
    res.redirect('/movies/list')
  })
  .catch((err) => {
    console.log('Error', err)
  })
})

// show details page for movies
router.get('/movie/:id', (req,res,next) => {
  const movieId = req.params.id
  Movie.findById(movieId  )
    .then(movie => {
      res.render('movies/details', {movie})
    })
    .catch(error => {
      console.log(error)
    })
})

//delete a movie
router.post('/movie/delete', (req,res,next) => {
   Movie.findByIdAndDelete(req.query.id)
  .then( () => {
    res.redirect('/movies/list')
  })
  .catch(error => {
    console.log(error)
  })
})

// edit details for a movie
router.get('/movies/edit/:id', (req,res,next) => {
  Movie.findById(req.params.id)
  .then((movieToEdit) => {
    res.render('movies/edit', {movieToEdit})
  })
  .catch(error => {
    console.log(error)
  })
})

router.post('/movies/edit', (req, res, next) => {
  const { title,genre,plot } = req.body;
  const movieId = req.query.id;
  Movie.findByIdAndUpdate(movieId, { title,genre,plot })
  .then(() => {
    res.redirect('/movies/list')
  })
  .catch(error => {
    console.log(error)
  })
})

module.exports = router;