const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET all movies */
router.get('/movies', (req, res, next) => {
  Movie.find({}).then( movie => {
    res.render('movies/movies', {movie});
  })
});

/* GET create page */
router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

/* GET Movies by Id */
router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id).then( movie => {
    res.render('movies/detail', {movie});
  })
});


/* POST a new Movies to DB */
router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot} = req.body;
  console.log(req.body);
  Movie.create({ title, genre, plot})
    .then( movie => {
    console.log("Movies sucessfully created!");
    res.redirect('/movies');
  });
});

/* GET edit Movies page*/
router.get('/movies/:id/edit', (req,res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render('movies/new',{movie});;
  })
})

/* POST to update a Movies in DB */
router.post('/movies/:id/edit', (req,res) => {
  const { title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id,{ title, genre, plot})
      .then( movie => {
        console.log(`Movies ${movie.title} succesfully updated`)
        res.redirect('/movies')
      })
})

/* Get delete Movies from DB */
router.get('/movies/:id/delete',(req,res) => {
  Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'));
})

module.exports = router;