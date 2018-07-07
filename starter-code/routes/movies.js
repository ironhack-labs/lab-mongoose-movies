const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* C(R)UD: Retrieve -> Show all movies */
router.get('/movies', (req, res, next) => {
  Movie.find({}).then( movies => {
    res.render('movies/index', {movies});
  })
});

/* (C)RUD: Add a movie form */
router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

/* (C)RUD: Create the movie in DB with the data introduced in the form*/
router.post('/movies', (req, res, next) => {
  const {title, genre, plot} = req.body;
  new Movie({title, genre, plot})
  .save().then( movie => {
    res.redirect('/movies');
  });
});

/* CRU(D): Delete a specific movie */
router.get('/movies/delete/:id',(req,res) => {
  Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'));
})

/* CR(U)D: Show a form to edit a movie */
router.get('/movies/edit/:id', (req,res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render('movies/edit',{movie});;
  })
})

/* CR(U)D: Update an specific movie */
router.post('/movies/edit/:id', (req,res) => {
  const {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id, {title, genre, plot})
      .then( movie => {
        res.redirect('/movies')
      })
})

/* C(R)UD: Retrieve -> Show an specific movie */
router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id).then( movie => {
    res.render('movies/show', {movie});
  })
});

module.exports = router;