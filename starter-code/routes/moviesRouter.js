const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
const app_name = require('../package.json').name;
const debug = require('debug')(`${app_name}:indexRouter`);



router.get('/movies', (req, res, next) => {
  debug(process.env.DEBUG);
  Movie.find().then(movies => {
    res.render('movies/index', {movies});
  })
  .catch((error)=> {
    console.log(error);
    res.render('/');
  });
});

router.get('/movies/:movId/show', (req, res, next) => {
  debug(process.env.DEBUG);
  Movie.findById(req.params.movId).then(movie => {
    res.render('movies/show',{movie})
  }).catch((error)=> {
    console.log(error);
    res.render('movies/index');
  });
});


router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies/new', (req, res, next) => {
  const movie = {
    imgUrl: req.body.imgUrl,
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movie.create(movie).then(mov => {
    console.log(`Created movie: ${mov._id} ${mov.title} with ${mov.genre} genre and plot: "${mov.plot}"`);
    res.redirect('/movies');
  })
  .catch((error)=> {
    console.log(error);
    res.render('movies/new');
  });
});

router.get('/movies/:movId/delete', (req,res) => {
  Movie.findByIdAndDelete(req.params.movId).then(()=> {
    res.redirect('/movies');
  })
  .catch((error)=> {
    console.log(error)
    res.render('movies/:movId/show');
  });
});

router.get('/movies/:movId/edit', (req,res) => {
  Movie.findById(req.params.movId).then(movie => {
    res.render('movies/edit', {movie})
  }).catch((error)=> {
    console.log(error);
    res.render('movies/:movId/show');
  });
});


router.post('/movies/:movId/edit', (req,res) => {
  const movie = {
    imgUrl: req.body.imgUrl,
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  const movId = req.params.movId;
  Movie.findByIdAndUpdate(movId, movie).then(() => {
    //res.redirect(`/movies/${movId}/show`);
    res.redirect('/movies');
  });
});




module.exports = router;
