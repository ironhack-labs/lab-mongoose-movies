const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity-model.js");
const Movie = require("../models/movie-model.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrityResults => {
      res.locals.celebrityArray = celebrityResults;
      // res.send(celebrityResults);
      res.render("celebrity.hbs");
    })
    .catch(err => next(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("new.hbs");
});

router.post("/celebrities/:celebrityId/delete", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(celebrityDoc => {
      res.locals.celebrityItem = celebrityDoc;
      res.redirect("/celebrities"); // with POST it 's allways redirect
    })
    .catch(err => next(err));
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findById(celebrityId)
    .then(celebrityDoc => {
      res.locals.celebrityItem = celebrityDoc;
      res.render("show.hbs");
    })
    .catch(err => next(err));
});

router.post("/process-celebrity", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrityDoc => {
      res.redirect("/celebrities");
    })
    .catch(err => next(err));
});
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movieResults => {
      res.locals.movieArray = movieResults;
      // res.send(celebrityResults);
      res.render("movie.hbs");
    })
    .catch(err => next(err));
});

router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("show-movie.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
