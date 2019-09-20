const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const Director = require("../models/Director");
const Actor = require("../models/Actor");

// since we have a /api prefix in app.js attached to this routes file,
// this route is actually "/api/movies"
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => {
      res.json(theMovie);
    })
    .catch(err => {
      console.log(err);
    });
});

// this is "/api/movies/creation"
router.post("/movies/creation", (req, res, next) => {
  let title = req.body.theTitle;
  let director = req.body.theDirector;
  let cast = req.body.theCast;
  let genre = req.body.theGenre;
  let plot = req.body.thePlot;
  let image = req.body.theImage;
  let creator = req.user._id;

  Movie.create({
    title: title,
    director: director,
    starring: cast,
    genre: genre,
    plot: plot,
    image: image,
    creator: creator
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      next(err);
    });
});

// router.get("/movies", (req, res, next) => {
//   Movie.find()
//   .then(allTheMovies => {
//     res.json(allTheMovies);
//   })
//   .catch(err => {
//     next(err);
//   })
// })

module.exports = router;
