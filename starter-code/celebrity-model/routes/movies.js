const express = require("express");
const router = express.Router();
const debug = require("../log")(__filename);

const Movie = require("../models/Movie");

/* CRUD -> Retrieve ALL */
router.get("/", (req, res) => {
  Movie.find().then(movies => {
    debug(movies);
    res.render("movie/movies_list", { movies });
  });
});

/* CRUD -> Create show form */
router.get("/new", (req, res) => {
  res.render("movie/movie_new");
});

/* CRUD -> Acquire form params and create the book object in DB */
router.post("/new", (req, res) => {
  const { title, genre, plot } = req.body;

  const movie = new Movie({ title, genre, plot });
  movie.save().then(movie => {
    console.log(movie);
    res.redirect("movie/movie");
  });
});

/* CRUD -> Retrieve Detail */
router.get("/:id", (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    console.log(movie);
    res.render("movie/movie_detail", { movie });
  });
});

/* CRUD -> Udpate, show book update form */
router.get("/:id/edit", (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movie/movie_edit", { movie });
  });
});

/* CRUD -> Udpate, update the book in DB */
router.post("/:id/edit", (req, res) => {
  const { title, genre, plot } = req.body;
  const updates = { title, genre, plot };
  Movie.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/movie/movie");
  });
});

/* CRUD -> Delete the book in DB */
router.get("/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/movie/movie");
  });
});

module.exports = router;
