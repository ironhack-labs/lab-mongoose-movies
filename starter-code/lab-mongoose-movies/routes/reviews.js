const express = require('express');
const router = express.Router();
const Movies = require('../models/movie');

//route to display the add-review form
router.get('/:id/reviews/add', (req, res, next) => {
  console.log("req.params", req.params);
  Movies.findById(req.params.id)
  .then((movie) => {
    res.render('Movies/addReview', movie);
  })
  .catch((err) => {
    next(err);
  });
});

//route to save review to db
router.post('/:id/reviews/create', (req, res, next) => {
  // console.log("req.params: ", req.params);
  // console.log("req.body", req.body);
  Movies.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}})
  .then((result) =>{
    res.redirect(`/movies/${req.params.id}`);
  })
  .catch((err) => {
    next(err);
  });
});

//route to delete a review from db
router.post('/:id/reviews/:reviewId/remove', (req, res, next) => {
  // console.log("movieId:", req.params.id);
  // console.log("reviewId:", req.params.reviewId);
  Movies.findByIdAndUpdate(req.params.id, {$pull: {reviews: {_id: req.params.reviewId}}})
  .then((result) => {
    console.log(result);
    res.redirect(`/movies/${req.params.id}`);
  })
  .catch((err) => {

  });
});


module.exports = router;