const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

router.get("/", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render("movies/index", { movies });
    })
    .catch(console.error);
});

router.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const movie = new Movie({ title, genre, plot });

  movie
    .save()
    .then(() => {
      res.redirect("/movies/");
    })
    .catch(console.error);
});

router.get("/create", (req, res, next) => {
  res.render("movies/create");
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then(movie => {
      res.render("movies/show", movie);
    })
    .catch(console.error);
});

router.post("/:id", (req, res) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;

  Movie.findByIdAndUpdate(id, {
    title,
    genre,
    plot
  }).then(() => {
    Movie.find({}).then(movies => {
      res.render("movies/index", { movies });
    });
  });
});

router.get("/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(result => {
      res.redirect("/movies/");
    })
    .catch(console.error);
});

router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  Movie.findById(id).then(movie => {
    res.render("movies/edit", movie);
  });
});

module.exports = router;
