const express = require('express');
const Movies = require('../models/movie-models.js');
const movieRoutes = express.Router();

movieRoutes.get('/movies', (req, res, next) => {
    Movies.find({}, {}, (err, theMovie) => {
        if (err) {
            next(err);
            return;
        }
        res.render('movies/movie-view.ejs', {
            movies: theMovie
        });
    });

});
movieRoutes.get('/movies/add', (req, res, next) => {
    res.render('movies/movie-add-view.ejs');
});
movieRoutes.post('/movies/add', (req, res, next) => {

    const newMovie = new Movies({
        title: req.body.titleValue,
        genre: req.body.genreValue,
        plot: req.body.plotValue
    });
    newMovie.save((err) => {
        if (err) {
            res.render('movies/movie-add-view.ejs', {
                error: newMovie.errors
            });
        }
        res.redirect('/movies');
    });

});

movieRoutes.post('/movies/:id/delete', (req, res, next) => {
    const movieId = req.params.id;
    Movies.findByIdAndRemove(movieId,(err, theMovie) => {
if (err) {
  next(err);
  return;
}
res.redirect('/movies');
    });

});

movieRoutes.get('/movies/:id/edit',(req,res,next)=>{
  const movieId = req.params.id;
  Movies.findById(movieId,(err,theMovie)=>{
    if (err) {
      next(err);
      return;
    }
    res.render('movies/movie-edit-view.ejs',{
      movie:theMovie
    });
  });
});
movieRoutes.post('/movies/:id/edit',(req,res,next)=>{
  const movieId = req.params.id;

  const movieChanges = {
    title: req.body.titleValue,
    genre: req.body.genreValue,
    plot: req.body.plotValue
  };
Movies.findByIdAndUpdate(movieId,movieChanges,(err)=>{
  if (err) {
    next(err);
    return;
  }
  res.redirect('/movies');
});
});



movieRoutes.get('/movies/:movieId', (req, res, next) => {
    const movieId = req.params.movieId;

    Movies.findById(movieId, (err, theMovie) => {
        if (err) {
            next(err);
            return;
        }
        res.render('movies/movie-detail-view.ejs', {
            movie: theMovie,
        });
    });
});


module.exports = movieRoutes;
