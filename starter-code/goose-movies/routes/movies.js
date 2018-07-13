//Call express:

const express = require('express');


//Express router function

const router = express.Router();


const Movie = require('../models/moviemodelfile')
const Celebrity = require('../models/celebritymodelfile')

//creating a new movie

router.get('/movies/new', (req, res, next)=>{
  res.render('movies/new')
})


router.post('/movies/', (req, res, next)=>{
  const newMovie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })



newMovie.save()
.then((response)=>{
  res.redirect('/movies/')
})
.catch((err)=>{
  next(err);
  res.redirect('/movies/view')
})

});

router.post('/movies/:id/delete', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.id)
  .then((response)=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err);
  })
})


router.get('/movies/:id/edit', (req,res, next)=>{
  Movie.findById(req.params.id)
  .then((theMovie)=>{
    res.render('movies/edit', {theMovie})
  })
  .catch((err)=>{
    next(err);
  })
})


router.post('/movies/:id/update', (req, res, next)=>{
  Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
  .then((theMovie)=>{
    res.redirect('/movies/')
  })
  .catch((err)=>{
    next(err);
  })
})








//Leaving these at bottom to register changes

//Get movies page
router.get('/movies', (req, res, next)=> {
  Movie.find()
  .populate('Celebrity')
  .then((listOfMovies)=>{
    res.render('movies/index', {listOfMovies});
  })
  .catch((err)=>{
    next(err);
  })
});



router.get('/movies/:id', (req, res, next)=>{
  const theId = req.params.id;
  Movie.findById(theId)
  .then((theMovie)=>{
    res.render('movies/show', {theMovie: theMovie});
  })
  .catch((err)=>{
    next(err);
  })
})


module.exports = router;