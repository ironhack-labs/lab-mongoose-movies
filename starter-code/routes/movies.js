const express = require('express');
const router  = express.Router();
const movieModel = require('../models/Movie');

router.get('/movies', (req, res, next) => {
  movieModel.find()
  .then(data => {
    res.render('movie/movies', {data});
  })
  .catch(err => {
    console.log(err)
  })
console.log('SUCCESS')
})


router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id
  movieModel.findById(id)
  .then(data => {
    res.render('movie/movie-details', {data});
  })
  .catch(err => {
    next()
    console.log(err)
  })
})


router.post('/movies', (req, res) => {
  let movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  var newInfo = new movieModel(movieInfo);
    newInfo.save(function (err) {
    if (err) {
      res.render('movie/movie-details');
    } else {
    movieModel.find()
      .then(data => {
        res.render('movie/movies', {data});
      })
    }
  });
});

router.get('/new-movie', (req, res, next) => {
  res.render('movie/new-movie');
  console.log('hey mister!')
})


router.post('/deletemovie/:id', function (req, res) {
  let id = req.params.id;

  movieModel.findByIdAndRemove(id)
    .then(data => {
      movieModel.find()
      .then(data => {
        res.render('movie/movies', {data});
      })
    })
    .catch(err => {
      next()
      return err;
    })
})

router.get('/editmovies/:id', (req, res, next) => {
  const id = req.params.id;

  movieModel.findById(id)
  .then(data =>  {
    res.render('movie/edit-movie', {data});
  })
  .catch(err => {
    next()
    return err;
  })
})


router.post('/save-edited-movie/:id', function (req, res) {
  let id = req.params.id;


  movieModel.findById(id, function (err, adventure) {});

  const updatedMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
    };
    
    movieModel.findOneAndUpdate(
      {id, ...updatedMovie}
   )
   .then(movies =>{

    res.render('movie/movie-details', {data: movies})
   
  })
  .catch(err => {
    console.log('ERROR:', err)
  })
})





module.exports = router;


