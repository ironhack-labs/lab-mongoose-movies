const express = require('express');
const router = express.Router();
const Movie = require("../models/movie")

//-----------GET MOVIE INDEX----------------//
router.get("/", (req, res) => {
  Movie.find()
    .then(movie => res.render("movies/index", {
      movie
    }))
    .catch(err => console.log(err));
});

//-----------MOVIE ADD ----------------

router.get("/new", (req, res, next) => {
  res.render("movies/new",)
});

router.post("/", (req, res, next) => {
  const {title, genre, plot} = req.body;
  const movie = new Movie({ title, genre, plot });

  movie.save()
    .then(() => res.redirect("/movies"))
    .catch(err => console.log(err));
});

//-----------GET MOVIE DETAIL----------------
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => res.render("movies/show", { movie }))
    .catch(err => console.log(err))
});

 //-----------MOVIE UPDATE ----------------

 router.get("/:id/edit", (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => { res.render("movies/edit", { movie });
  });
});

router.post("/detail/:id", (req, res) => {
  const {title, genre, plot} = req.body;
  const updates = { title, genre, plot };
  Movie.findByIdAndUpdate(req.params.id, updates)
  .then(celebrity => {
    res.redirect("/movies");
  });
});

//-----------MOVIE DELETE ----------------

router.post('/:id/delete', (req, res, next) => {
  let movie = req.params.id;
  Movie.findByIdAndRemove(movie)
  .then(() => {
    res.redirect('/movies')
  })
  .catch(error => {
    next();
  })
 });

module.exports = router;