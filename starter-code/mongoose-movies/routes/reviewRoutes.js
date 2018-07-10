const express     = require('express');
const reviewRouter = express.Router();
const Movie        = require('../models/movie');

reviewRouter.get('/movies/:id/reviews/new', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((theMovie)=>{
    res.render('movies/addReview', {movie: theMovie});
  })
  .catch((error)=>{
    next(error);
  });
});

reviewRouter.post('/movies/:id/reviews/create', (req, res, next)=>{
  Movie.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}})
  .then((response)=>{
    res.redirect(`/movies/${req.params.id}`);
  })
  .catch((err)=>{
    next(error);
  });
});

module.exports = reviewRouter;
