/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next)=>{
  Movie.find({}, (err,movies)=>{
    res.render('movies/index',{movies:movies});
  });
});



router.get('/new', (req,res,next)=>{
  res.render('movies/new');
});

router.post('/', (req,res,next)=>{
  let movieData = req.body;
  const newMovie = new Movie(movieData);
  newMovie.save((err)=>{
    if(err)
    {
      res.render('movies/new');
    }
    res.redirect('/movies');
  });
});

router.get('/:id', (req,res,next)=>{
  let movieId = req.params.id;
  Movie.findById(movieId,(err,movie)=>{
    if(err)
    {
      next(err);
    }
    res.render('movies/show',{movie:movie});
  });
});

router.get('/:id/delete', (req,res,next)=>{
  const movieId = req.params.id;
  // console.log(id);
  Movie.deleteOne({_id:movieId},(err)=>{
    if(err)
    {
      next(err);
    }
    res.redirect('/movies');
  });
});

router.get('/:id/edit', (req,res,next)=>{
  const movieId = req.params.id;
  // console.log(id);
  Movie.findById({_id:movieId},(err,movie)=>{
    if(err)
    {
      next(err);
    }
    res.render('movies/edit',{movie:movie});
  });
});


module.exports = router;
