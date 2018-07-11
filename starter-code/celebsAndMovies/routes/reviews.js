const express = require("express");
const reviewRouter = express.Router();

const Movie = require("../models/movie");

reviewRouter.get("/movies/:id/reviews/new", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => {
      res.render("movies/addReview", theMovie);
      console.log(theMovie);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

reviewRouter.post("/movies/:id/reviews/create", (req, res, next) => {
  const theReview = req.body;
  Movie.findByIdAndUpdate(req.params.id, { $push: { reviews: theReview } })
    .then(response => {
      res.redirect(`/movies/${req.params.id}`);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

reviewRouter.post("/movies/:id/reviews/:reviewer/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => {
      theMovie.reviews.forEach(review => {
        if(review.reviewer === req.params.reviewer){
          console.log(review);
        }
      });
      res.redirect("/movies/reviews", theMovie);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

module.exports = reviewRouter;
