const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

router.get("/movies", (req, res) => {
  Movie.find()
    .then(movies =>{
  res.render('movies', {movies});

  })
  .catch(error => {
    console.log('Error while getting the movies from the DB: ', error);
  })
});


router.get("/movies/new", (req, res) => {
  res.render('movies/new');
  })


router.get("/movies/:id", (req, res) => {
  const id= req.params.id;
  Movie.findById(id)
    .then(movie =>{
  res.render('movies/show', movie);

  })
  .catch(error => {
    console.log('Error while getting the movies from the DB: ', error);
  })
});


  
router.post('/movies', (req, res) => {
  const {title,genre,plot} = req.body;
  const movie = {
    title,
    genre,
    plot
  }
  const newMovie = new Movie(movie);
  newMovie.save()
  .then(() => {
    res.redirect("/movies");
  })
  .catch((err) => {
    console.log(err);
  })
});

router.post('/movies/:id/delete', (req, res) => {
  const id = req.params.id;
  Movie.findByIdAndRemove(id)
  .then(() =>{
    res.redirect("/movies");
  })
  .catch((err) => {
    console.log("no se ha borrado");
  })
});

router.get('/movies/:id/edit', (req,res) => {
  const id = req.params.id;
  Movie.findById(id)
  .then(movie =>{
    res.render('movies/edit', movie);
  })
  .catch((err) =>{
    console.log(err);
  })
})


router.post('/movies/:id', (req, res) => {
  const {title,genre,plot} = req.body;
  const movie = {
    title,
    genre,
    plot
  }
  const id = req.params.id;
  Movie.findByIdAndUpdate(id, movie)
  .then(() => {
    res.redirect("/movies");
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;