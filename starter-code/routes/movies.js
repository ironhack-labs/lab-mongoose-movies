const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', { movies: movies })
    })
    .catch(err => {
      console.log(`There has been an error retrieving the movies info: ${err}`)
    })
})

router.get('/:id/edit', (req, res) => {
    const {id} = req.params;
    Movie.findById(id)
      .then(movie => {
        res.render('celebrities/edit', movie)
      })
      .catch(err => {
        console.log(`There was an error retrieving the edit form: ${err}`)
      })
  })
  
  router.post('/:id/delete', (req, res) => {
    let id = req.params.id;
    Movie.findByIdAndRemove(id)
      .then(() => {
        res.redirect('/movies');
      })
      .catch(err => {
        console.log(err)
      })
  })
  
  router.get('/new', (req, res) => {
    res.render('movies/new')
  })
  
  router.post('/new', (req, res) => {
    Movie.create(req.body)
      .then(() => {
        res.redirect('/movies')
    })
      .catch(err => {
        console.log(err)
        res.redirect('/movies/new')
      })
  })
  
  router.get('/:id', (req, res) => {
    const {id} = req.params;
    Movie.findById(id)
      .then(movie => {
        res.render('movies/show', movie)
      })
      .catch(err => {
        //la importancia del orden de las rutas: si pones primero /:id no jala /new
        console.log(`Error trying to access show.hbs: ${err}`)
      })
  })
  
  router.post('/:id', (req, res) => {
    const {id} = req.params;
    Movie.findByIdAndUpdate(id, {$set: {...req.body}})
    .then(() => {
      res.redirect('/movies')
    })
    .catch(err => {
      console.log(err)
    })
  })
  
  module.exports = router;
