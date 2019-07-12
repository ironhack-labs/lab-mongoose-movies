const express = require('express');
const router  = express.Router();
const movies = require('../models/movies');
const celebrities = require('../models/celebrities');
const uploadMagic = require('../config/cloudinary-setup');

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
      console.log(hotFromDB);
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

router.post('/movies', uploadMagic.single('image'), (req, res, next) => {
  let title = req.body.title;
  let genre = req.body.genre;
  let plot = req.body.plot;
  let img = req.file.url;
  let actors = req.body.actors;

  movies.create({
    title: title,
    genre: genre,
    plot: plot,
    image: img,
    actors: actors
  })
  .then((newlyCreated) => {
    console.log(newlyCreated);
    req.flash('success', 'New movie added successfully')
    res.redirect('/movies/index')
  })
  .catch(err => {
    next(err)
  })
 
})

router.post('/movies/:id/delete', (req, res, next) => {
  movies.findByIdAndRemove(req.params.id)
  .then(()=>{
    req.flash('success', 'Movie removed successfully');
      res.redirect('/movies/index');
  })
  .catch((err)=>{
      next(err);
  })
})

router.get('/movies/:id/edit', (req,res, next) => {
  movies.findById(req.params.id) 
    .then((hotFromDB) => {
      celebrities.find()
      .then(celebs => {

        res.render('movies/edit', {movieToEdit: hotFromDB, actors: celebs})
      })
    })
    .catch((err)=>{
      next(err);
  })
})

router.post('/movies/:id', (req,res, next) => {
  movies.findByIdAndUpdate(req.params.id, req.body) 
    .then(() => {
      req.flash('success', 'Movie modified successfully');
      res.redirect('/movies/'+req.params.id)
    })
    .catch((err)=>{
      next(err);
  })
})





module.exports = router;