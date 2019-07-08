const express = require('express');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Celebrities
router.get('/celebrities/index', (req, res) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(err => console.log('Error:', err));
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities/index');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/celebrities/:id/delete', (req, res) => {
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
    .then((celebrity) => {
      res.redirect('/celebrities/index');
    })
    .catch(err => console.log(err));
});

router.get('/celebrities/:id/edit', (req, res) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/edit', { celebrity });
    })
    .catch(err => console.log(err));
});

router.post('/celebrities/:id', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } })
    .then((celebrity) => {
      res.redirect('/celebrities/index');
    })
    .catch(err => console.log(err));
});

router.get('/celebrities/:id', (req, res) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(err => console.log("ERROR:", err));
});

// Movies
router.get('/movies/index', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/index', { movies });
    })
    .catch(err => console.log('Error:', err));
});

router.get('/movies/new', (req, res) => {
  res.render('movies/new');
});

router.post('/movies/new', (req, res) => {
  const { title, genre, plot } = req.body;
  console.log(req.body);
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
    .then((movie) => {
      res.redirect('/movies/index');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/movies/:id/delete', (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id)
    .then((movie) => {
      res.redirect('/movies/index');
    })
    .catch(err => console.log(err));
});

router.get('/movies/:id/edit', (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movie) => {
      res.render('movies/edit', { movie });
    })
    .catch(err => console.log(err));
});

router.post('/movies/:id', (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.update({ _id: req.params.id }, { $set: { title, genre, plot } })
    .then((movie) => {
      res.redirect('/movies/index');
    })
    .catch(err => console.log(err));
});

router.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render('movies/show', { movie });
    })
    .catch(err => console.log("ERROR:", err));
});

module.exports = router;
