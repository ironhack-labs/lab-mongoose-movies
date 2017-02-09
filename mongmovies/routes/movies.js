const express   = require('express');
const Movie = require('../models/movie');

const router    = express.Router();

router.get('/', (req, res, next)=> {
  Movie.find({}, (err, moovie)=>{
    console.log(moovie);
    if (err){
      next(err);
    } else {
      res.render('movies/index', {moovie: moovie} );
    }
  });
});

router.get('/new', (req, res, next)=> {
  res.render('movies/new');
});

router.post('/', (req, res, next)=>{
  const newMovieInfo = {
    title : req.body.title,
    genre : req.body.genre,
    plot  : req.body.plot
  };
  let newMovie = new Movie(newMovieInfo);

  newMovie.save( (err)=>{
    if (err){
      alert("Try again");
      res.render('movies/new');
    } else {
      res.redirect('/movies');
    }
  });
});

router.get('/:id', (req, res, next)=> {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie)=>{
    console.log(movieId);
    if (err){
      next(err);
    } else {
      console.log(movie);
      res.render('movies/show', {movie: movie} );
    }
  });
});

router.post('/:id/edit', (req, res, next)=> {
  const movieId = req.params.id;
  Movie.findById(movieId, (err, movie)=> {
    if (err){
      next(err);
    }
    res.render('movies/edit', {movie: movie});
  });
});

router.post('/:id/delete', (req, res, next)=> {
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId, (err, movie)=> {
    if(err)
    {
      next(err);
    } else {
    res.redirect('/movies');
    }
  });
});

router.post('/:id', (req, res, next)=> {
  const movieId = req.params.id;
  let newInfo = {
    title : req.body.title,
    genre : req.body.genre,
    plot  : req.body.plot
  };

  Movie.findByIdAndUpdate(movieId, newInfo, (err, movie)=> {
    if (err){ next(err);
    } else {
    res.redirect('/movies');
    }
  });
});




















module.exports = router;
