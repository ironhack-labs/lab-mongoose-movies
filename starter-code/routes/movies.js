const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const genericMovie = new Movie();

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log(movies);
      res.render("movies/movies", { movies: movies });
    })
    .catch(err => {});
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      res.render("movies/movie", { movie: movie });
    })
    .catch(err => {});
});

router.get("/newmovies", (req, res, next) => {
  res.render("movies/newmovies");
});

router.post("/newmovies", (req, res) => {
  genericMovie.title = req.body.title;
  genericMovie.genre = req.body.genre;
  genericMovie.plot = req.body.plot;
  genericMovie
    .save()
    .then(() => {
      res.redirect("/movies");
    })
    .catch(() => {});
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      console.log(movie);
      res.redirect("/movies");
    })
    .catch(err => {});
});

router.get("/editmovie/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(movie => {
    console.log(movie);
    res.render("movies/edit", { movie: movie });
  });
});

router.post("editmovie/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update(
    { _id: req.query.movies_id },
    { $set: { title, genre, plot } }
  )
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
