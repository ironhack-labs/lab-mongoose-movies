const express = require('express');
const Movie = require('../models/movie');

const router  = express.Router();

router.get('/', (req, res, next) => {
    Movie.find({}, (err, movies) => {
      if (err) { return next(err) }
      
      res.render('movies/index', {
        movies: movies
    });
  });
});

router.get('/new', (req, res, next) => {
   res.render('movies/new');
    })

router.post('/new', (req, res) => {
  const infoMovie = {
    title: req.body.title, 
    genre: req.body.genre,
    plot: req.body.plot,
  };
   
  const newMovie = new Movie(infoMovie);
  newMovie.save( (err) => {
      if (err) { res.redirect('/movies/new'); }
  
       res.redirect('/movies');
       });
})

router.post('/:id/delete', (req, res, next) => {
  
    Movie.findByIdAndRemove(req.params.id, (err, movies) => {
    if (err) { return next(err) }

    res.redirect('/movies');
})
})


router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id, (err, movies) => {
    if (err) { return next(err) }

    res.render('movies/show', {
      movies: movies
  });
})
})

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id, (err, movies) => {
  if (err) { return next(err) }

  res.render('movies/edit', {
    movies: movies
  });
})
})

router.post('/:id', (req, res, next) => {
  
  const infoMovie = {
    title: req.body.title, 
    genre: req.body.genre,
    plot: req.body.plot,
  };

  Movie.findByIdAndUpdate(req.params.id, infoMovie, (err, movies) => {
    if (err){ return next(err)}
    return res.redirect('/movies');
  })

})



module.exports = router;