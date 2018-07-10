const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie");

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then( movies =>{
      res.render('movies/index', {movies});
    })
    .catch(err => {
      return next(err);
    })
});

router.get('/movies/new', (req, res) => {
    console.log("Aqui anda entrando");
    res.render('movies/new');
  });
  
router.post("/movies", (req, res, next) => {
    const { title, genre, plot } = req.body;

    const newMovie = new Movie({ title, genre, plot });
    newMovie.save()
    .then(movie => {
        res.redirect("/movies");
    })
    .catch(err => {
        res.redirect("/movies/new");
    })
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(details => {
      res.render("movies/show", { details });
    })
    .catch(err => {
      return next(err);
    })
  });

router.post("/movies/:id/delete", (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(() => {
        res.redirect("/movies");;
    })
    .catch((err)=>{
        return next(err);
    })
});

router.get("/movies/:id/edit", (req, res, next) => {
    Movie.findById(req.params.id)
    .then(details => {
      res.render("movies/edit", { details });
    })
    .catch((err)=>{
      return next(err);
    })
  });
  
  router.post("/movies/:id", (req, res) => {
    const { title, genre, plot } = req.body;
    const updates = { title, genre, plot };
    Movie.findByIdAndUpdate(req.params.id, updates)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err)=>{
      return next(err);
    })
  });

module.exports = router;