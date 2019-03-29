const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")

router.get('/', (req, res) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies});
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/newMov', (req, res) => {
  res.render('newMov');
});

router.post('/newMov', (req, res) => {
  console.log(req.body);
  Movie.create(req.body)
  .then(() => {
    res.redirect('/movies');
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  Movie.findById(id)
  .then(movie => {
    res.render('detailMov', movie);
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
  .then(movie => {
    res.render('newMov', movie);
  });
});

router.post('/:id/edit', (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndUpdate(id, {$set: {...req.body}})
  .then(movie => {
    console.log(movie); 
    res.redirect('/movies');
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/:id/delete', (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/movies');
  });
});

module.exports = router;