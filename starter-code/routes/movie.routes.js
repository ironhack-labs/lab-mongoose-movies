const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movies.model')

router.get('/movies', (req, res, next) =>{
    Movie.find()
    .then((movieList)=>{
        console.log(`Movie-List:${movieList}`);
        res.render('movies-list', {movieList})
    })
    .catch(err => console.log(`Error finding Movie-List ${err}`))
});

router.get('/movies/new', (req, res, next) => {
    res.render('movies-new')
});

router.post('/movies/new', (req, res, next) => {
    Movie.create(req.body)
    .then(() => {
        console.log("Yes, we saved your book in the DB!!")
        res.redirect('/movies');
    })
})

router.get('/movies/:celeId', (req, res, next) => {
    Movie.findById(req.params.celeId)
    .then(movie=> {
        res.render('movies-show', {movie})
    })
    .catch(err => console.log(`Error finding Details ${err}`))
});

router.get('/movies/:celeId/edit', (req, res, next) => {
    Movie.findById(req.params.celeId)
    .then(movie => {
        res.render('movies-edit', movie)
    })
    .catch(err => console.log(`Error editing ${err}`))
})

router.post('/movies/:movieId/edit', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.movieId, req.body, {new: true})
    .then(() => {
        res.redirect('/movies')
    })
    .catch(err => console.log(`Error editing ${err}`))
})

router.post('/movies/:movieId/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.movieId)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(err => console.log(`Error deleting ${err}`))
  });
  




module.exports = router;