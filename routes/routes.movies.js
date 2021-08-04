const router = require('express').Router();
const mongoose = require('mongoose');

const Movie = require('../models/movie.model');
const Celebrity = require('../models/celebrity.model');

router.get('/movies/list', (req, res) => {
  Celebrity.find().then((allCelebs) => {
    const celebs = allCelebs;
    Movie.find().then((allMovies) => {
      res.render('movies/movie-list', { celebs: allCelebs, movies: allMovies });
    });
  });
});

router.post('/movies/new', (req, res) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({ title, genre, plot, cast }).then(() => {
    res.redirect('/movies/list');
  });
});

router.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .populate('cast')
    .then((singleMovie) => {
      res.render('movies/movie-detail', { movie: singleMovie });
    });
});


router.post('/movies/delete/:id',(req,res)=>{
  const id= req.params.id;
  Movie.findByIdAndDelete(id)
  .then(()=>{
    res.redirect('/movies/list')
  })
})
module.exports = router;
