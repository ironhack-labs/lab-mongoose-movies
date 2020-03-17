const mongoose = require("mongoose");
const express      = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// RENDERS HOME

router.get('/', (req, res, next) => {
    Movie.find()
    .then(movies => {
        res.render('movies/index', {movies: movies});
    })
    .catch (error => {
        console.log('Error while getting the celebities from DB: ', error);
    });
});

//ADDS NEW CELEBRITY TO DB

router.get('/new', (req, res, next) => {
    res.render('movies/new')
});

router.post('/new', (req, res, next) => {
    const { title, genre, plot } = req.body;
    const newMovie = new Movie({ title, genre, plot })
    newMovie.save()
    .then(() => {
      res.redirect('/movies')
    })
    .catch((error) => {
      console.log('error Adding Movie', error)
    })
  });



// DELETES CELEBRITIES

  router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(() => {res.redirect('/movies')})
    .catch(e => next(e))
})
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        console.log(movie)
        res.render('movies/show', movie)
    })
    .catch (error => {
        console.log('Error while getting the celebity from DB: ', error);
    });
});

// EDITS CELEBRITIES 

router.get('/:id/edit' , async (req, res, next) => {
    const editCeleb = await Movie.findById(req.params.id)
    console.log(editCeleb)
    res.render('movies/edit', editCeleb)
});

router.post('/:id/edit', async (req, res, next) => {
    const { title, genre, plot } = req.body;
    console.log(req.body)
    await Movie.update({_id: req.body.id}, { $set: {title, genre, plot}})
    res.redirect('/movies');
});

module.exports = router;
