const express = require("express");
const router = express.Router();
const Movies = require("../models/movie.js");


router.get("/movies", (req, res, next) => {
  Movies.find()
    .then(data => {
      res.locals.movie = data;
      res.render("movies/index");
    })
    .catch(err => next(err));
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/movies-new");
});

router.get("/movies/:_id", (req, res, next) => {
  Movies.findById(req.params)
    .then(data => {
      res.locals.movie = data;
      res.render("movies/movies-details");
    })
    .catch(err => next(err));
});

router.post("/process-form-movie-", (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movies.create({title, genre, plot})
    .then(res.redirect("/movies"))
    .catch(err => next(err));
});

router.get("/movies/delete/:_id", (req, res, next) => {
  Movies.findByIdAndRemove(req.params)
    .then(() => {
      res.redirect("/movies");
    })
    .catch();
});

router.get("/movies/:_id/edit", (req, res, next) => {
  Movies.findById(req.params)
    .then(data => {
      res.locals.movie = data;
      res.locals.form = "edit";
      res.render("movies/movies-new");
    })
    .catch();
});

router.post("/process-form-movie-edit/:_id", (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movies.findByIdAndUpdate(
    req.params,
    {$set: {title, genre, plot}},
    {runValidators: true}
  )
    .then(data => {
      // res.json(data);
      res.redirect(`/movies/${data._id}`);
    })
    // next(err) skips to the error handler is "bin/www" (error.hbs)
    .catch(err => next(err));
});


module.exports = router;