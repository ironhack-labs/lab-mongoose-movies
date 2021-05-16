const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.model')

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(mov => res.render('movies/index', {mov}))
        .catch(err => next(err))
});

router.get('/movies/new', (req, res, next)=>{
    res.render('movies/new')
})

router.post('/movies/new', (req, res) => {
    const {title, genre, plot} = req.body;
    Movie.create({title, genre, plot})
        .then(() => {
            res.redirect('/movies')
        })
        .catch(error => next(error));
});

router.get('/movies/:id', (req, res, next)=>{
    const {id}= req.params;
    Movie.findById(id)
        .then(film => res.render('movies/show', {film: film}))
        .catch(err => next(err))
})



router.get('/movies/:id/edit', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
        .then(film => res.render('movies/edit', {film}))
        .catch(err => next(err));
});

router.post('/movies/:id/edit', (req, res, next) => {
    const { id } = req.params;
    const {title, genre, plot} = req.body;

    Movie.findByIdAndUpdate(id, {title, genre, plot}, {new: true})
         .then(res.redirect('/movies') )
         .catch(err => next(err))
});

router.post('/movies/:id/delete', (req, res, next) => {
    const { id } = req.params;
  
    Movie.findByIdAndDelete(id)
      .then(()=> res.redirect('/movies'))
      .catch(err => next(err))
  });

module.exports = router;