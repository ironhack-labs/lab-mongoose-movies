const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');
const Movies = require('../models/movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index', { celebrities });
  })
  .catch(err => console.log(err));
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});
router.get('/celebrities/:Id', (req, res, next) => {
  const { Id } = req.params;
  Celebrity.findById(Id)
  .then(celebrity => {
    res.render('celebrities/show', celebrity);
  })
  .catch(err => console.log(err));
});

router.post('/celebrities/:Id/delete', (req, res, next) => {
  const { Id } = req.params;
  Celebrity.findByIdAndRemove(Id)
  .then(() => {
    res.redirect('/celebrities');
  })  
  .catch((error) => {
    console.log(error);
  })  
});  

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(movies => {
    res.render('movies/index', { movies });
  })
  .catch(err => console.log(err));
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movies({ title, genre, plot });
  newMovie.save()
  .then(() => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});

router.get('/movies/:Id', (req, res, next) => {
  const { Id } = req.params;
  Movies.findById(Id)
  .then(movie => {
    res.render('movies/show', movie);
  })
  .catch(err => console.log(err));
});

router.post('/movies/:Id/delete', (req, res, next) => {
  const { Id } = req.params;
  Movies.findByIdAndRemove(Id)
  .then(() => {
    res.redirect('/movies');
  })  
  .catch((error) => {
    console.log(error);
  })  
});  

module.exports = router;
