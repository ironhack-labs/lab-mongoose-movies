const express = require("express");
const router = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');


router.get('/new', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => res.render('movies/new-movie', {
      celebrities: celebrities
    }))
    .catch((error) => console.log(error));
});

router.post('/create', (req, res, next) => {
  Movie.create(req.body, (err) => {
    if (err) return handleError(err);
    console.log("celebrities are created");
    res.redirect('/movies');
  })
});


router.get('/', (req, res, next) => {
  Movie.find({}).
  then(movies => {
      return movies.map(movie => movie.populate('cast'))
    })
    .then(movies => res.render('movies/movies', {
      movies: movies
    }))
    .catch(error => console.log(error))
});

router.get('/:movieId', (req, res, next) => {
  Movie.findOne({
      _id: req.params.movieId
    })
    .populate('cast')
    .then((movie) => res.render('movies/movie-details', movie))
    .catch(error => console.log(error))
  // findOne({id:req.query})
  // res.render('movies/movie-details')
})

router.post('/:movieId/delete', (req, res, next) => {
  Movie.findByIdAndRemove({
      _id: req.params.movieId
    }).then((movie) => res.redirect('/movies'))
    .catch(error => console.log(error))

})

router.get('/:movieId/edit', (req, res, next) => {
// let newObj={};
  // console.log(req.query.cast.split(","));

  // Movie.findOne({_id:req.params.movieId}).then(movie=>Object.assign(movie.cast)).then(obj=>console.log(obj))

  
  Celebrity.find().then(celebrities => {
      return celebrities.map(celebrity => celebrity.id)
    })
    .then(celebrities => Movie.findByIdAndUpdate({_id:req.params.movieId}, {$set:{cast:celebrities}}, {new:true}).populate('cast'))
    .then(movie=>res.render('movies/movie-edit', movie))
    
})

router.post('/:movieId/edit', (req, res, next) => {


 console.log(req.body)
  Movie.findByIdAndUpdate({
      _id: req.params.movieId
    }, {
      $set: req.body
    }, {
      new: true
    })
    .then((movie) => res.redirect('/movies'))
    .catch(error => console.log(error))

})

module.exports = router;