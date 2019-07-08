const express = require('express');
const router  = express.Router();
const movies = require('../models/movies')
const celebrities = require('../models/celebrities')

/* GET home page */
router.get('/movies/index', (req, res, next) => {
  movies.find().populate('actors')
    .then((theMoviesFromDB)=>{
      res.render('movies/index', {ofTheMovies: theMoviesFromDB})
    })
    .catch((err)=> {
      next(err)
    })
 
});

router.get('/movies/:id', (req, res, next) => {
  movies.findById(req.params.id).populate('actors')
    .then((hotFromDB)=> {
      res.render('movies/detailed', {singleMovie: hotFromDB})
    })
    .catch(err=> {
      next(err)
    })
})

router.get('/movies/create/new', (req, res, next) => {
  celebrities.find()
    .then(allTheCelebs=> {
      res.render('movies/createNew', {celebs: allTheCelebs})

    })
    .catch(err => {
      next(err);
    })
  
})

router.post('/movies', (req, res, next) => {
  console.log(req.body)
  movies.create(req.body);
  res.redirect('/movies/index')
})

router.post('/movies/:id/delete', (req, res, next) => {
  movies.findByIdAndRemove(req.params.id)
  .then(()=>{
      res.redirect('/movies/index');
  })
  .catch((err)=>{
      next(err);
  })
})

router.get('/movies/:id/edit', (req,res, next) => {
  movies.findById(req.params.id) 
    .then((hotFromDB) => {
      res.render('movies/edit', {movieToEdit: hotFromDB})
    })
    .catch((err)=>{
      next(err);
  })
})

router.post('/movies/:id', (req,res, next) => {
  movies.findByIdAndUpdate(req.params.id, req.body) 
    .then(() => {
      res.redirect('/movies/'+req.params.id)
    })
    .catch((err)=>{
      next(err);
  })
})





module.exports = router;