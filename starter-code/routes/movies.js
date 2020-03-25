const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

router.get("/", (req, res, next) => {
  Movie.find().then(movies => res.render("movies/index", { movies }));
});

router.get("/create", (req, res, next) => {
  res.render("movies/new");
});

router.get("/:id", (req, res, next) => {
  console.log("HELLO");
  Movie.findById(req.params.id)
    .then(movie => {
      console.log({ movie });
      res.render("movies/show", { movie });
    })
    .catch(e => {
      console.log(e);
    });
});
router.post("/create", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({
    title: title,
    genre: genre,
    plot: plot
  })
    .then(movie => {
      console.log("A new movie was added", movie);
      res.redirect("/movies");
    })
    .catch(err => console.log(err));
});

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      console.log("The movie was deleted", movie);
      res.redirect("/movies");
    })
    .catch(err => console.log(err));
});

router.get("/:id/edit", (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/edit", { movie })
    })
      .catch(err => console.log(err));
  });

router.post("/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.updateOne({ _id: req.params.id }, { $set: { title, genre, plot } })
    .then(() => res.redirect("/movies"))
    .catch(err => next(err));
});

module.exports = router;
