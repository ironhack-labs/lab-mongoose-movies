const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET movies list */
router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => res.render("movies/index", { movies }))
    .catch(e => next(e));
});

/* Get new movie form */
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

/* GET edit movies*/
router.get("/:id/edit", (req, res, next) => {
  console.log(req.params.id);
  Movie.findById(req.params.id)
    .then(movie => res.render("movies/edit", movie))
    .catch(e => next(e));
});

/* GET movie details */
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => res.render("movies/show", movie))
    .catch(e => next(e));
});

/* POST add new movie */
router.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(error => res.render("movies/new", { error }));
});

/* POST delete movie */
router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(e => next(e));
});

/* POST edit movie */
router.post("/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(req.params.id, { title, genre, plot })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(e => next(e));
});

module.exports = router;
