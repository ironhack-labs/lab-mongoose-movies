const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// display all movies
router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      next(error);
    });
});

// render page with the form on it
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

// send the data to after the form is filled out.
router.post("/", (req, res, next) => {
  let newTitle = req.body.title;
  let newGenre = req.body.genre;
  let newPlot = req.body.plot;

  Movie.create({
    title: newTitle,
    genre: newGenre,
    plot: newPlot
  })
    .then(result => {
      res.redirect("/movies");
    })
    .catch(err => {
      next(err);
    });
});

// detail page
router.get("/:id", (req, res, next) => {
  // Call the Movie model's findOne or findById method to retrieve the details of a specific movie by its id.
  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      //   res.render("the file",{data which is passed to the file})
      res.render("movies/show", { movie });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
