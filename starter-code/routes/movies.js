const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then((movie) =>{
    res.render('movies', {movie});
  })
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.create({title, genre, plot})
  .then(()=>{
    res.redirect('/movies');
  })
  .catch(next)
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params
  Movie.findByIdAndRemove(id)
  .then(()=>{
    res.redirect('/movies');
  })
  .catch(next)
});

router.get('/:id/update', (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
  .then((movie)=>{
    res.render('update', {movie});
  })
  .catch(next)
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(id, {
    title, 
    genre, 
    plot
  })
  .then(() =>{
    res.redirect('/movies');
  })
});

router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  Movie.findById(id)
  .then((movie) =>{
    res.render('movie', {movie});
  })
});

module.exports = router; 