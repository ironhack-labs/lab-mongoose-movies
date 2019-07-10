const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')


const ensureLogin = require("connect-ensure-login");


/* GET celebrites page */
router.get('/movies', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Movie.find()
  .then((theWholeDBArray)=>{
    res.render('movies/index', {allTheMovies: theWholeDBArray})
  })
  .catch((err)=>{
    next(err);
  })
});


router.get('/movies/details/:id', (req, res, next) => {
Movie.findById(req.params.id)
  .then((theSinlgeMovie)=>{
    res.render('movies/show', {movieDeets: theSinlgeMovie})
  })
  .catch((err)=>{
    next(err);
  })
});


router.get('/movies/new', ensureLogin.ensureLoggedIn(), (req, res, next)=> {
  res.render('movies/newMovie');
})

router.post('/movies/create-new-movie', (req, res, next)=>{
  // const {title, genre, plot} = req.body;
  // this is like saying
  // const title = req.body.title;
  // const descrtiption = req.body.descrition;
  // etc.
  // let newCeleb = {name: name, occupation: occupation, catchPhrase: catchPhrase }
  Movie.create(req.body)
  .then((newlyCreatedMovie)=>{
    req.flash('error', (`Successfully added profile for ${newlyCreatedMovie.title}`))
      res.redirect(`/movies/details/${newlyCreatedMovie._id}`)
      //what if I want to go to the page where it shows the individual celebrity? 
  })
  .catch((err)=>{
      res.render('movies/new')
      next(err);
  })
})

router.post('/movies/delete/:id', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then((movieRemoved)=>{
    req.flash('error', (`Successfully deleted profile for ${movieRemoved.title}`))
    res.redirect('/movies');
  })
  .catch((err)=>{
    next(err);
  })
})



router.get('/movies/edit/:id', (req, res, next) => { //could I have done celeb/:id/edit?
  Movie.findById(req.params.id)
  .then((theMovieReturned)=>{
    res.render('movies/edit', {theMovie: theMovieReturned});
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/movies/update/:id', (req, res, next) => {
  const theID = req.params.id;
  Movie.findByIdAndUpdate(theID, req.body) 
  .then((newlyEditedMovie)=>{
    req.flash('error', (`Successfully edited profile for ${newlyEditedMovie.title}`))
    res.redirect(`/movies/details/${newlyEditedMovie._id}`);
  })
  .catch((err)=>{
    next(err);
  })
})



module.exports = router;
