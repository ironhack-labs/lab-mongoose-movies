const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie')

//Movies routes

//show index movies
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
        res.render('movies/index', { movies });
    })
    .catch(err => console.log(err));
});
// show all
router.get('/movie/:movieID', (req, res) => {
  const movie = req.params.movieID;
  Movie.findById(movie)
      .then(movie => {
          // console.log(movie);
          res.render('movies/show', movie);
      })
      .catch(err => console.log(err));
});

// go to edit page
router.get('/movie/:movieID/edit', (req, res) => {
  const movie = req.params.movieID;
  Movie.findById(movie)
      .then(movie => {
          
          res.render('movies/edit', movie);
      })
      .catch(err => console.log(err));
});

// recieve edit info and update
router.post('/movie/:movieID/edit', (req, res, next) => {
  const { id, title, genre, plot } = req.body;
  console.log({ id});
  Movie.updateOne({_id: id}, { $set: { title, genre, plot }})
  .then(() => {
    console.log(id);
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});
// delete 
router.post('/movie/delete', (req, res) => {
  const {id} = req.body;
  
  Movie.findByIdAndRemove(id)
      .then(movie => {
          
          res.redirect('/movies');
      })
      .catch(err => console.log(err));
});

// go to new page
router.get('/movies/new', (req, res, next) => {
  res.render("movies/new");
});

// recieve new info and create
router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  // console.log(req.body);
  const newMovie = new Movie({ title, genre, plot })
  
  newMovie.save()
      .then(() => {
          res.redirect('/movies');
      })
      .catch((error) => {
          console.log(error);
      })
});

module.exports = router;
