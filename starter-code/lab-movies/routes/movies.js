const express = require('express');
const router = express.Router();
const debug = require("../log")(__filename);

const Movie = require("../models/Movie");

router.get('/index', (req, res, next) => {

  Movie.find().then(movies =>{
    //debug(movies)
    res.render('movies/index', {movies});
  })
  .catch(err => res.render("error", err));
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post("/new", (req, res, next) => {

    const { title, genre, plot } = req.body;
    const movie = new Movie({ title, genre, plot });  
    movie
      .save()
      .then(() => res.redirect("/movies/index"))
      .catch(err => res.render("error", err));
});

router.get("/:id", (req, res, next) => {

  Movie.findById(req.params.id)
  .then(movie_detail => {
    //debug(movie_detail)
    res.render("movies/show", {movie_detail});
  })
  .catch(err => res.render("error", err));
});

router.post("/:id/edit", (req, res, next) => {

  const { title, genre, plot } = req.body;
  const movieEdit = { title, genre, plot };

  Movie.findByIdAndUpdate(req.params.id, movieEdit)
    .then(res.redirect("/movies/index"))
    .catch(err => res.render("error", err));
});

router.get("/:id/edit", (req, res, next) => {

  Movie.findById(req.params.id)
  .then(movie_detail => {
    res.render("movies/edit", {movie_detail});
  })
  .catch(err => res.render("error", err));

});

router.post("/:id/delete", (req, res, next) => {

  Movie.findByIdAndRemove(req.params.id)
  .then(res.redirect("/movies/index"))
  .catch(err => res.render("error", err));
})


module.exports = router;