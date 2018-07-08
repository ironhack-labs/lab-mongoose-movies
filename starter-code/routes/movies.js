const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
  Movie.find({}).then( movies => {
    res.render('movies/index', {movies});
  })
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  new Movie({title, genre, plot})
  .save().then( celebrity => {
    console.log("Movie sucessfully created!");
    res.redirect('/movies');
  });
});

/* CR(U)D: Update the book, show update form  */
router.get('/edit/:id', (req,res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render('movies/edit',{movie});;
  })
})

/* CR(U)D: Update the book in DB */
router.post('/edit/:id', (req,res) => {
  const {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id,{title, genre, plot})
      .then( movie => {
        res.redirect('/movies')
      })
})


router.get('/delete/:id',(req,res) => {
  Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'));
})


router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id).then( movie => {
    res.render('movies/show', {movie});
  })
});

module.exports = router;
