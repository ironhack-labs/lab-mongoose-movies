const express = require("express");
const router = express.Router();

const Movie = require("../models/movie.model");

// /pelis

// Movies list

router.get("/listado", (req, res) => {
  Movie.find({}, { title: 1 })
    .then((movies) => res.render("movies-list", { movies }))
    .catch((err) => console.log("ERROR: ", err));
});

// Details by Id

router.get("/detalles/:peli_id", (req, res) => {
  const id = req.params.peli_id;

  Movie.findById(id)
    .then((movieDetails) => res.render("movie-det", movieDetails))
    .catch((err) => console.log("ERROR: ", err));
});

// Add new films

router.get("/nueva", (req, res) => res.render("new-movie-form"));

router.post("/nueva", (req, res) => {
  const { title, genre, plot } = req.body;

  Movie.create({ title, genre, plot })
    .then(() => res.redirect("/pelis/listado"))
    .catch((err) => console.log("ERROR: ", err));
});

// Delete movies

router.get("/borrar/:movie_id", (req, res) => {
  const id = req.params.movie_id;

  Movie.findByIdAndDelete(id)
    .then(() => res.redirect("/pelis/listado"))
    .catch((err) => console.log("ERROR: ", err));
});

// Edit movies
router.get("/editar/", (req, res) => {
  const id = req.query.movie_id;

  Movie.findById(id)
    .then((movieDetails) => res.render("edit-movie-form", movieDetails))
    .catch((err) => console.log("ERROR: ", err));
});

router.post("/editar/:movie_id", (req, res) => {
  const id = req.params.movie_id;
  const { title, genre, plot } = req.body;

  Movie.findByIdAndUpdate(id, { title, genre, plot }, { new: true })
    .then(() => res.redirect("/pelis/listado"))
    .catch((err) => console.log("ERROR: ", err));
});

module.exports = router;
