const express = require("express");
const router = express.Router();
const MovieModel = require("./../Model/Movie");

router.get("/", (req, res) => {
  MovieModel.find()
    .then(dbres => res.render("movies/index", { movies: dbres }))
    .catch(err => console.log(err));
});

router.get("/new", (req, res) => {
  var msg;
  res.render("movies/new");
});

router.get("/:id", (req, res) => {
  MovieModel.findOne({ _id: req.params.id })
    .then(dbres => res.render("movies/show", { movie: dbres }))
    .catch(err => console.log(err));
});

router.get("/:id/edit", (req, res) => {
  MovieModel.findById(req.params.id)
    .then(dbres => res.render("movies/edit", { movie: dbres }))
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  const createMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  if (req.body.title !== "" && req.body.genre !== "" && req.body.plot !== "") {
    const newMovie = new MovieModel(createMovie);
    newMovie
      .save()
      .then(dbres => res.redirect("/movies"))
      .catch(err => console.log(err));
  } else {
    const msg = "please fill name field !";
    res.render("movies/new", { msg });
  }
});

router.post("/:id/delete", (req, res) => {
  MovieModel.findByIdAndRemove(req.params.id)
    .then(dbres => res.redirect("/movies"))
    .catch(err => console.log(err));
});

router.post("/:id", (req, res) => {
  const editMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  MovieModel.findOneAndUpdate({ _id: req.params.id }, editMovie)
    .then(dbres => res.redirect("/movies"))
    .catch(err => console.log(err));
});

module.exports = router;
