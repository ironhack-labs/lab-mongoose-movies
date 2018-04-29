
const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();


router.get('/new' , (req, res, next) => {

  res.render('movies/new');

});


router.get('/:id/edit' , (req, res, next) => {
  const idToEdit = req.params.id;
  console.log("inside edit");
  Movie.findById( idToEdit, (err, movie) => {
    if(err){
      next(err);
    }else{
      res.render('movies/edit', { movie });
    }
  });
});

router.post('/:id/edit', (req, res, next) => {
  const idToEdit = req.params.id;

  const editedData = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  Movie.findByIdAndUpdate( idToEdit , editedData , ( err, movie) => {
    if(err){
      next(err);
    }else{
      //res.send("hello");
      res.redirect('/movies/' + idToEdit);
    }
  });
});


router.get('/', (req, res, next) => {
  console.log("inside index");
  // Iteration #2
  Movie.find({}, (err, movies) => {
      if (err) {
        next(err);
      } else {
        console.log(movies);
        res.render('movies/index', { movies } );
      }
    });
});


router.post('/:id/delete', (req, res, next) => {
  const idToDelete = req.params.id;
  Movie.findByIdAndRemove(idToDelete, ( err, movie ) => {
    if(err){
      next(err);
    }else{
      res.redirect('/movies');
    }
  });
});

router.post('/', (req, res, next) => {
  const movieData = {
    title : req.body.title,
    genre : req.body.genre,
    plot : req.body.plot
  }
  const newMovie = new Movie ( movieData);
  newMovie.save(( err) => {
    if(err){
      //return next(err);
      res.render('movies/new');
    }else{
        res.redirect('/movies');
    }
  });
});

//  why does it go in here for router.get('/new')?
//CastError: Cast to ObjectId failed for value "foo" at path "_id".

router.get('/:id', (req, res, next) => {
  const myId = req.params.id;
  // Iteration #2
  Movie.findById(myId, (err, movie) => {
      if (err) {
        next(err);
      } else {
        console.log("inside show details");
        res.render('movies/show', { movie } );
      }
    });
});

module.exports = router;
