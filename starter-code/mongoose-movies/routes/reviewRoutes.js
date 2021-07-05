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

reviewRouter.post('/movies/:id/reviews/delete/:reviewIndex', (req, res, next)=>{
  const movieID = req.params.id;
  const reviewIndex = req.params.reviewIndex;
  Movie.findById(movieID)
  .then((theMovieBeingEdited)=>{
    theMovieBeingEdited.reviews.splice(reviewIndex, 1);
    //theMovieBeingEdited.review[reviewIndex] = {reviewer: "me", content: "wahh"}
    theMovieBeingEdited.save()
    .then(()=>{
      res.redirect('/movies/'+ movieID);
    })
    .catch((err)=>{
      next(err);
    });
  })
  .catch((err)=>{
    next(err);
  });
});

module.exports = reviewRouter;
