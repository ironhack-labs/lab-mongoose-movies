const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
    Movie.find()
        .then(movies => {
            res.render('movies/', {header: 'List of movies', movies});
        })
        .catch(error => {
            console.log(error)
        })
});

router.get('/movies/:id/edit', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/edit', {header: 'Edit Movie', movie})
        })
        .catch(error => {
            console.log(error)
        })
});

router.get('/movies/new', (req, res) => {
    res.render('movies/new', {header: 'Create Movie'});
});

router.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/show', {header: movie.title, movie});
        })
        .catch(error => {
            console.log(error)
        })
});

router.post('/movies', (req, res) => {
    Movie.create(req.body)
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => {
            res.render('movies/new')
        })
});

router.post('/movies/:id', (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(() => {
            res.redirect('/movies');
        })
        .catch(e => {
            console.log(e);
        })
});

router.post('/movies/:id/delete', (req, res) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => {
            console.log(error)
        })
});

router.get('/celebrities', (req, res) => {
  Celebrity.find()
      .then(celebrities => {
          res.render('celebrities/', {header: 'List of celebrities', celebrities});
      })
      .catch(error => {
          console.log(error)
      })
});

router.get('/celebrities/new', (req, res) => {
    res.render('celebrities/new', {header: 'Create Celebrity'});
});

router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById(req.params.id)
      .then(celebrity => {
          res.render('celebrities/show', {header: celebrity.name, celebrity});
      })
      .catch(error => {
          console.log(error)
      })
});

router.post('/celebrities', (req, res) => {
    Celebrity.create(req.body)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(error => {
            res.render('celebrities/new')
        })
});

router.post('/celebrities/:id', (req, res) => {
    Celebrity.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(e => {
            console.log(e);
        })
});

router.post('/celebrities/:id/delete', (req, res) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(error => {
            console.log(error)
        })
});

router.get('/celebrities/:id/edit', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/edit', {header: 'Edit Celebrity', celebrity})
        })
        .catch(error => {
            console.log(error)
        })
});

module.exports = router;
