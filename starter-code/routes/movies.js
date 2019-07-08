const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie');

router.get('/movies', (req, res) => {
    Movie.find()
        .then(movie => {
            res.render('movies/index', {movie})
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/movies', (req, res) => {
    const { title, genre, plot } = req.body;
  
    if(!title) {
      res.redirect('/movies/new')
    }
  
    Movie.create({
      title,
      genre, 
      plot
    })
      .then( () => {
        console.log('saved !')
        res.redirect('/movies')
      })
      .catch( err => {
        console.log(err)
      })
})
  
router.get('/movies/new', (req, res) => {
    res.render('movies/add')
})
  
router.get('/movies/:id', (req, res) => {
    const id = req.params.id;
  
    Movie.findById(id)
      .then( movie => {
        res.render('movies/show', movie)
      })
})
  
router.post('/movies/:id', (req, res) => {
    const id = req.params.id;
  
    if(!req.body.title) {
      res.redirect(`/movies/${req.params.id}/edit`);
      return
    }
  
    const newData = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }
  
    Movie.findByIdAndUpdate(id, newData)
      .then(() => {
        console.log('Updated !')
        res.redirect('/movies')
      })
      .catch(err => {
        console.log(err)
      })
})
  
router.post('/movies/:id/delete', (req, res) => {
    const id = req.params.id;
  
    Movie.findByIdAndRemove(id)
      .then(() => {
        console.log('deleted !')
        res.redirect('/movies')
      })
      .catch(err => {
        console.log(err)
      })
})
  
router.get('/movies/:id/edit', (req, res) => {
    const id = req.params.id
  
    Movie.findById(id)
      .then(movie => {
        res.render('movies/edit', movie)
      })
      .catch(err => {
        console.log(err)
      })
})

module.exports = router;