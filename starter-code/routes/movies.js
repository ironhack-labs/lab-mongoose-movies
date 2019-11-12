const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res) => {
  Movie.find({})
    .then(docs => {
      res.render("movies/movies.hbs", { movies: docs });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/new", (req, res) => {
  res.render("movies/moviesForm.hbs");
});

router.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then(item => {
    res.render("movies/movieDetails.hbs", { movie: item });
  });
});

router.post("/", (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.create({
    title,
    genre,
    plot
  })
    .then(newMovie => {
      res.redirect("/movies/" + newMovie._id);
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/:movieId/edit", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId)
    .then(item => {
      res.render("movies/movieEdit.hbs", { movie: item });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const { title, genre, plot } = req.body;

  Movie.updateOne(
    { _id: movieId },
    {
      title,
      genre,
      plot
    }
  )
    .then(_ => {
      res.redirect("/movies/" + movieId);
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.post("/:movieId/delete", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findByIdAndRemove(movieId)
    .then(_ => {
      res.redirect("/movies");
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

module.exports = router;
