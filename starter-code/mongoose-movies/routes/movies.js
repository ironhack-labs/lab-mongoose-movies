const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')
const Celebrity = require('../models/celebrity');
const uploadCloud = require('../config/cloudinary.js');
const ensureLogin = require("connect-ensure-login");


router.get('/movies', ensureLogin.ensureLoggedIn('/signup'), (req, res, next) => {
  Movie.find()
  .then((movieInfo) => {
    res.render('movies/index', {listOfMovies: movieInfo})
  })
  .catch((err) => {
    next(err)
  })
});

router.get('/movies/new', ensureLogin.ensureLoggedIn('/signup'), (req, res, next) => {
  if(!req.user){
    res.redirect('/movies')
    return
}
  res.render('movies/new')
});

router.post('/movies/create', uploadCloud.single('photo'),(req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    imgPath: req.file.url,
    imgName: req.file.originalname,
  })
  .then((response) => {
    res.redirect('/movies')
  })
  .catch((err) => {
    next(err);
  })
});

router.post('/movies/delete/:id', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then((response) => {
    res.redirect('/movies')
  })
  .catch((err) => {
    next(err)
  })
});

router.post('/movies/update/:id', uploadCloud.single('photo'), (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, { 
      title: req.body.title,
      genre: req.body.genre,
      imgPath: req.file.url,
      imgName: req.file.originalname,
      $push: {cast: req.body.theCelebrity}
    })
    .then((response)=>{
        Celebrity.findByIdAndUpdate(req.body.theCelebrity,
            {$push: {movies: req.params.id}
        })
            .then((theResponse)=>{
                res.redirect('/movies/'+req.params.id)
            })
            .catch((err)=>{
                next(err)
            })
    })
    .catch((err)=>{
        next(err)
    })
});


router.get('/movies/edit/:id', ensureLogin.ensureLoggedIn('/signup'), (req, res, next) => {
  Movie.findById(req.params.id)
  .then((aMovie) => {
    Celebrity.find()
    .then((celebInfo) => {
      res.render('movies/edit', {theMovie: aMovie,  celebs: celebInfo});
    })
    .catch((err) => {
      next(err);
    })
  })
  .catch((err) => {
    next(err)
  })
});

router.get('/movies/:id', ensureLogin.ensureLoggedIn('/signup'), (req, res, next) => {
  Movie.findById(req.params.id).populate('cast')
  .then((movieInfo)=>{
      res.render('movies/show', {movieDetails: movieInfo})
    })

  .catch((err)=>{
    next(err);
  });
});
  
  
  
  router.get('/movieList', ensureLogin.ensureLoggedIn('/signup'), (req, res, next)=>{
    res.render('movies/movieList');
  });

module.exports = router;