const express = require('express');

const Movies = require('../models/movies');

const router = express.Router();


router.get('/', (req, res, next) => {
  Movies.find()
    .then((movies) => {
      res.render('movies/index', { movies });
    })
    .catch(err => console.log(`Fire!${err}`));
});

router.get('/new', (req, res) => { // learn why the position is so relevant 
  res.render('movies/new');
});

router.get('/:moviesID', (req, res, next) => {
  const search = req.params.moviesID;
  Movies.findById(search)
    .then((movies) => {
      res.render('movies/show', movies);
    })
    .catch(err => console.log(`Fire!${err}`));
});

router.post('/', (req, res, next) => {
  const { poster, title, genre, plot } = req.body;
  const newMovie = new Movies({ poster, title, genre, plot });

  newMovie.save()
    .then((movies) => {
      console.log(movies)
      res.redirect('/movies');
    })

    .catch((error) => {
      res.render('movies/new');
    });
});


router.post('/:id/delete', (req, res, next) => {
  const search = req.params.id;
  Movies.findByIdAndRemove(search)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => console.log(`Fire!${err}`));

});

router.get('/:id/edit', (req, res, next) => {
  const search = req.params.id;
  Movies.findById(search)
    .then((movies) => {
      res.render('movies/edit', { movies });
    })
    .catch(err => console.log(`Fire!${err}`));
});

router.post('/:id', (req, res, next) => {
  const { poster, title, genre, plot } = req.body;
  const { id } = req.params;
  Movies.update({ _id: id }, { $set: { poster, title, genre, plot } })
    .then((movies) => {
      console.log(movies)
      res.redirect('/movies');
    })
    .catch(err => console.log(`Fire!${err}`));

});

module.exports = router;