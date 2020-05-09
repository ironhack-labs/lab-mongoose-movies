const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js');



router.get('/movies', (req, res) => {
    Celebrity.find() 
      .then(allCelebs => {
        //console.log(allCelebs)
        res.render('celebrities/index', {celebs: allCelebs});  
      });
  });

router.get('/movies/new', (req, res) => res.render('movies/new-movie')); 

router.post('/movies/create', (req, res, next) => {
  const {title, genre, plot, cast} = req.body;

  const newMovie = new Movie({title, genre, plot, cast});
  
  newMovie.save()
  .then(()=> {
    res.redirect('/movies');
  })
  .catch((error) => {
    next(error);
  });

});


module.exports = router;