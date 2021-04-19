const express = require("express");
const Movie = require ("../models/Movie.model.js");
const router = express.Router();

//SHOW MOVIES
router.get("/", (req, res, next) => {
  Movie.find({})
  .then((movies) => {
    res.render("movies/index", { movies })
  })
  .catch((error) => console.error(error));
})

//ADD MOVIE
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/", (req, res, next) => {
  const { name, genre, plot } = req.body;
  Movie.create({ name, genre, plot })
  .then(() => {
    res.redirect("/movies")
  })
  .catch((error) => res.render("/movies/new", { error }))
})

//DELETE MOVIE 
router.post("/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id)
    .then(() => res.redirect("/movies"))
    .catch((error) => next(error));
});

//EDIT MOVIE
router.get("/:id/edit", (req, res, next) => {
  const {id} = req.params;
  Movie. findById(id)
  .then((movie) => {
    res.render("movies/edit", movie);
  })
  .catch((error) => res.render("movies/edit",{error}));
})

router.post("/:id", (req, res, next) => {
  const {id} = req.params;
  const {name, genre, plot} = req.body;
  Movie.findByIdAndUpdate(id, {name, genre, plot})
  .then(() => {
    res.redirect("/movies")
  })
  .catch((error) => console.error(error));
})

//SHOW MOVIE DETAILS
router.get("/:id", (req, res, next) => {
  const {id} = req.params;
  Movie.findById(id)
  .then((movie) => {
    res.render("movies/show", movie);
  })
  .catch((error) => console.error(error))
})
module.exports = router;