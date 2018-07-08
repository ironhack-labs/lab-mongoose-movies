const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');


/* GET movies page */
router.get('/', (req, res, next) => {  
  Movie.find({})
  .then(movies => {
  res.render('movies/index', {movies});
  })
  .catch(err => next())
});

/* GET movies id page */
router.get('/:id', (req, res, next) => {  
  Movie.findById({_id: req.params.id})
  .then(movies => {res.render('movies/show',{movies});
  })
  .catch(err => next())
});

/* Create the movies in DB */
router.get('/new', (req, res) => {
  res.render('movies/new');
});

router.post('/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  new Movie({title, genre, plot})
  .save().then( movie => {
    console.log("Movie sucessfully created!");
    res.redirect('/movies');
  })
  .catch(err => next())
});

/* Delete the movies in DB */
router.post('/:id/delete',(req,res) => {
  Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'))
  .catch(err => next())
})

module.exports = router;