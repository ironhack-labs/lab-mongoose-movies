
const express = require('express');

const MovieModel = require("../models/movies");

const router = express.Router();


// Movies List

router.get("/movies", (req, res, next) => {
  MovieModel
  .find()
  .exec()
  .then((movieResults) => {

    res.locals.listOfMovies = movieResults;

    res.render("movies/index");
  })
  .catch((err) => {
    next(err);
  });
});


router.post("/movies/:id/delete", (req, res, next) => {

    MovieModel.findByIdAndRemove(req.params.id)

    .then((celebrityFromDb) => {
        res.redirect("/movies");
    })

    .catch((err) => {
      next(err);
    });
});

module.exports = router;