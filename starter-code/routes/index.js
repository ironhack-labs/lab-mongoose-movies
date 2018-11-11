const express = require('express');
const router  = express.Router();
const Celebrity  = require('../models/Celebrity');
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//get celebrities
router.get('/celebrities', (req, res, next) => {
Celebrity.find()
.then(celebrities => {
  console.log(celebrities)
  res.render("./celebrities/celebrities", { celebrities });
})
.catch(error => {
  console.log(error)
})
});

//get movies
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    console.log(movies)
    res.render("./movies/movies", { movies });
  })
  .catch(error => {
    console.log(error)
  })
  });

  //get celebrities/new
router.get('/celebrities/new', (req, res, next) => {
  res.render('./celebrities/new');
});



//post celebrities

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase})
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});

//get movies/new
router.get('/movies/new', (req, res, next) => {
  res.render('./movies/new');
});


//post movies

router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot })
  newMovie.save()
  .then((movie) => {
    res.redirect('/movies')
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;
