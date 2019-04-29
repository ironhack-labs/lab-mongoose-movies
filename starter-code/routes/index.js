const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')
const Movies = require('../models/movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    console.log(celebrity)
    res.render('celebrities', {celebrity})
  })
})

router.get('/celebrities/add', (req, res, next) => {
  res.render('celebrityadd');
});

router.get('/celebritiesshow', (req, res, next) => {
  Celebrity.findOne({_id: req.query.celebrity_id})
  .then(celebrity => {
    console.log(celebrity)
    res.render('celebritiesshow', {celebrity})
  })
})

router.get('/celebrities/edit', (req, res, next) => {
  Celebrity.findOne({_id: req.query.celebrity_id})
  .then((celebrity) => {
    res.render("celebrity-edit", {celebrity});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/celebrities/add', (req, res, next) => {
  console.log('we should see the client rrying to talk to us',req.body)
  const {name, occupation, catchPhrase} = req.body
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase})
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});


router.get('/celebrities/delete', (req, res, next) => {
  console.log('did i hit this rout?', req.query)
  Celebrity.findByIdAndDelete(req.query.celebrity_id)
  .then(deleted => {
    res.redirect('/celebrities')
  })
})

router.post('/celebrities/edit', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.update({_id: req.query.celebrity_id}, { $set: {name, occupation, catchPhrase}})
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});

/* Movies Routing <-----------------------------------------> */

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(movies => {
    console.log(movies)
    res.render('Movies/movies', {movies})
  })
})

router.get('/movies/add', (req, res, next) => {
  res.render('Movies/newmovie');
});

router.get('/movieinfo', (req, res, next) => {
  Movies.findOne({_id: req.query.movie_id})
  .then(movie => {
    console.log(movie)
    res.render('Movies/details', {movie})
  })
})

router.get('/movies/edit', (req, res, next) => {
  Movies.findOne({_id: req.query.movie_id})
  .then((movie) => {
    res.render("Movies/movieedit", {movie});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/movies/add', (req, res, next) => {
  console.log('we should see the client rrying to talk to us',req.body)
  const {title, genre, plot} = req.body
  const newMovie = new Movies({ title, genre, plot})
  newMovie.save()
  .then((movie) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});


router.get('/movies/delete', (req, res, next) => {
  console.log('did i hit this rout?', req.query)
  Movies.findByIdAndDelete(req.query.movie_id)
  .then(deleted => {
    res.redirect('/movies')
  })
})

router.post('/movies/edit', (req, res, next) => {
  const {title, genre, plot} = req.body
  Movies.update({_id: req.query.movie_id}, { $set: {title, genre, plot}})
  .then((movie) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});












module.exports = router;
