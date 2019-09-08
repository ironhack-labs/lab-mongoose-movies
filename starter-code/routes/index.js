const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');
const Movies = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/index', (req, res, next) => {
  Celebrity.find()
    .then(celebrity => {
      res.render('celebrities/index', { celebrity });
    })
    .catch(error => {
      console.log('Error', error);
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById({ _id: req.params.id })
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(error => {
      console.log('Error', error);
    });
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity
    .save()
    .then()
    .catch(error => {
      console.log('Error occured:', error);
      res.redirect('/celebrities/new');
    });

  res.redirect('/celebrities/index');
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({ _id: req.params.id })
    .then()
    .catch(error => {
      console.log('Error occured:', error);
      res.redirect('/celebrities/index');
    });

  res.redirect('/celebrities/index');
});

router.get('/celebrities/:id/edit', (req,res,next) =>{
  Celebrity.findById({ _id: req.params.id })
    .then(celebrity => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(error => {
      console.log('Error occured:', error);
    });
});

router.post('/celebrities/:id/edit', async (req,res) =>{
  const { name, occupation, catchPhrase } = req.body
  await Celebrity.findByIdAndUpdate({ _id: req.params.id }, {
    name,
    occupation,
    catchPhrase })
  res.redirect('/celebrities/index')
});

//Movies
router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const movie = new Movies({ title, genre, plot });
  movie
    .save()
    .then()
    .catch(error => {
      console.log('Error occured:', error);
      res.redirect('/movies/index');
    });
  res.redirect('/movies/index');
});

router.get('/movies/index', (req, res, next) => {
  Movies.find()
    .then(movies => {
      res.render('movies/index', { movies });
    })
    .catch(error => {
      console.log('Error', error);
    });
});

router.get('/movies/:id', (req, res, next) => {
  Movies.findById({ _id: req.params.id })
    .then(movie => {
      res.render('movies/show', { movie });
    })
    .catch(error => {
      console.log('Error', error);
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movies.findByIdAndRemove({ _id: req.params.id })
    .then()
    .catch(error => {
      console.log('Error occured:', error);
      res.redirect('/movies/index');
    });

  res.redirect('/movies/index');
});

router.get('/movies/:id/edit', (req,res,next) =>{
  Movies.findById({ _id: req.params.id })
    .then(movie => {
      res.render('movies/edit', { movie });
    })
    .catch(error => {
      console.log('Error occured:', error);
    });
});

router.post('/movies/:id/edit', async (req,res) =>{
  const { title, genre, plot } = req.body
  await Movies.findByIdAndUpdate({ _id: req.params.id }, {
    title,
    genre,
    plot })
  res.redirect('/movies/index')
});

module.exports = router;
