/*jshint esversion: 6*/

const express = require("express");
const router = express.Router();

const Movies = require("../models/movies");


router.get('/',(req, res, next) => {
  Movies.find({},(err,movies) => {
    if (err) {
      next(err);
    } else {
      res.render('movies/index',{movies: movies});
    }
  });
});


router.get('/a/:id',(req, res, next) => {
    Movies.findById(req.params.id, (err, movie) => {
      if (err) { next(err); }
      res.render('movies/show', { movie: movie} );
    });
});

router.get('/new',(req, res, next) => {
    res.render('movies/new');
});

router.post('/',(req, res, next) => {
    const movieInfo = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    };

    const newMovie = new Movies(movieInfo);
    newMovie.save((err)=>{
      if (err) { next(err); } else {
        res.redirect('/movies');
      }
    });
});

router.get('/a/:id/delete',(req, res, next) => {
    Movies.findByIdAndRemove(req.params.id, (err)=>{
      if (err) { next(err); } else {
          res.redirect('/movies');
      }
    });
});


router.get('/a/:id/edit',(req, res, next) => {
    console.log(req.params.id);
    Movies.findById(req.params.id, (err, movie) => {
      if (err) { next(err); }
      res.render('movies/edit', { movie: movie} );
    });
});




router.post('/a/:id/',(req, res, next) => {
  const newMovieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movies.findByIdAndUpdate(req.params.id, newMovieInfo ,(err, movie) => {
    if (err) { next(err); }
    res.redirect('/movies');
  });
});


module.exports = router;
