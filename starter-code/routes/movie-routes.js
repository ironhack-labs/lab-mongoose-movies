const express = require('express');
const router = express.Router();

const Movie = require('../models/movie-model');
const Celebrity = require('../models/celebrity-model');

router.get('/new', (req,res,next)=> {
  Celebrity.find()
  .then(theCelebrities=> {
    res.render('movie-views/new-movie', { celebritiesFromDb: theCelebrities });
  })
  .catch(err => console.log("Error while displaying celebrities into the form : ", err))
});

router.post('/create', (req,res,next)=> {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    image_url: req.body.image_url,
    cast: req.body.cast,
  })
  .then(newMoview => {
    res.redirect('/movie/movies')
    console.log("New Movie created in DB: ", newMoview)
  })
  .catch(err => console.log("Error while creating movie in DB: ", err))
})

router.get('/movies', (req,res,next)=> {
  Movie.find()
  .then( allMovies => {
    res.render('movie-views/all-movies', { moviesFromDb: allMovies })
  })
  .catch(err => console.log("Error while finding movies from DB: ", err))
})



router.get('/:movieId', (req,res,next) => {
  Movie.findById(req.params.movieId).populate('cast')
  .then( theMovie => {
    res.render('movie-views/movie-details', { movie:theMovie })
    console.log("The requested movie", theMovie)
  })
  .catch(err => console.log("Error while getting movie :", err))
})




module.exports = router;