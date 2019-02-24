//mandatory
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movie = require('../models/movie.js');

//connect with database
mongoose.connect('mongodb://localhost/movies', {useNewUrlParser: true}, function(err){
    if(err) console.log("ERROR",err)
    else console.log("connected")
})

//find movies
router.get('/movies', (req, res) => {
  Movie.find()
    .then((allMovies) => {
      res.render('movies/index.hbs', {allMovies});
    })
    .catch((err) => {
      console.log('error ', err);
      next();
    });
});
//find movies by id
router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((oneMovie) => {
      res.render('movies/show', {oneMovie});
    })
    .catch((err) => {
      console.log('error', err);
      next();
    });
});

//render page new movies
router.get('/movies/new', (req, res,) => {
    res.render('movies/new.hbs');
});

//render page and create new movie with post method
router.post('/movies', (req, res, next) => {
  const addMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  }
  const newMovie = new Movie(addMovie);

    newMovie
        .save()
        .then(() => {
            console.log('add movie ok')
            res.redirect('/movies');
        })
        .catch((err) => {
          console.log('error, not created', err);
          res.render('movies/new');
    });
});
//delete movie by id from database
router.post('/movies/:id/delete', (req, res,next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/movies/');
    })
    .catch((err) => {
        console.log('error', err);
        next();
    });
});

// extra
//edit item by id
router.get('/movies/:id/edit', (req,res,next) =>{
  Movie.findById(req.params.id)
    .then((editMovie) =>{
      res.render('movies/edit', {editMovie});
    })
    .catch((err) => {
        console.log('error',err);
    })

})


//I try to use movie find and update by id, but it's not working
router.post('/movies/:id', (req, res, next) => {
	Movie.update(
		{ _id: req.params.id},
    { $set: { title: req.body.movieTitle, 
              genre: req.body.movieGenre, 
              plot: req.body.moviePlot } }
	)
		.then(() => {
			res.redirect('/movies');
		})
		.catch((err) => {
			console.log(err);
			next();
		});
});

module.exports = router;



