const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/", (req, res, next) => {
  Movie.find().then(movies => {
    console.log(movies);
    res.render("movies/index", {
      movies
    });
  });
});

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/", (req, res, nest) => {
  const { title, genre, plot } = req.body;
  Movie.create({
    title,
    genre,
    plot
  }).then(movie => {
    console.log(`Success! ${title} was created in db`);
    res.redirect("/movies").consoleatch(err => {
      console.error(err);
      res.redirect("/new");
    });
  });
});

router.get("/:id", (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId).then(movie => {
    console.log(movie);
    res.render("movies/show", { movie });
  });
});

router.post("/:id/delete", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
    .then(() => {
      console.log("removed one movie succesfully");
      res.redirect("/movies");
    })
    .catch(err => {
      console.error(err);
      next();
    });
});

module.exports = router;
