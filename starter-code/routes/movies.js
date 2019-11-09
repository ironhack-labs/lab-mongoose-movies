const express = require("express");
const router = express.Router();
const moviesModel = require("./../models/movies");

router.get("/movies/index", (req, res) => {
  moviesModel
    .find()
    .then(dbRes => {
      console.log(dbRes);
      res.render("movies/index", { movies: dbRes });
    })
    .catch(e => console.log(e));
});

router.get("/movies/show/:id", (req, res) => {
  moviesModel
    .findOne({ _id: req.params.id })
    .then(dbRes => {
      res.render("movies/show", { movie: dbRes });
    })
    .catch(e => console.log(e));
});

router.get("/movies/new", (req, res) => {
  res.render("movies/new");
});

router.post("/create-movie", (req, res) => {
  const newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.genre
  };
  moviesModel
    .create(newMovie)
    .then(dbRes => res.redirect("/movies/index"))
    .catch(e => console.log(e));
});

router.get("/movies/delete/:id", (req, res) =>
  moviesModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.redirect("/movies/index"))
    .catch(e => console.log(e))
);

router.get("/movies/edit/:id", (req, res) => {
  moviesModel
    .findById(req.params.id)
    .then(dbRes => res.render("movies/edit", { movie: dbRes }))
    .catch(e => console.log(e));
});

router.post("/movies/:id", (req, res) => {
  var movieEdited = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  moviesModel
    .findByIdAndUpdate(req.params.id, movieEdited)
    .then(dbRes => res.redirect("/movies/index"))
    .catch(e => console.log(e));
});

module.exports = router;
