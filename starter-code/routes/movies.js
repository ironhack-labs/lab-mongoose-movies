const mongoose = require('mongoose')
const myMovies = require('../models/movies')
//  mongoose.connect('mongodb://localhost/celebrity')
const express = require('express');
const router  = express.Router();


router.get('/movies', (req, res) => {
  myMovies.find({}, function(err, movie) {
    
    res.render('movies/index', {movie})
    // console.log({movie});

  });
});

router.get('/movies/:id', (req, res) => {
  // const theId = req.params.id;
  myMovies.findById(req.params.id, 
    function(err, movie) {
    res.render('movies/show', {movie})
  });
});

router.get('/movies/new/movie', (req, res) => {
  // console.log("hey hello")
    res.render('movies/new')
  
  });


  router.post('/movies/new/create', function (req, res){
    
  
    //where it is in html
  
    const theTitle = req.body.theTitle;
    const theGenre = req.body.theGenre;
    const thePlot = req.body.thePlot;
  
  
  
  //change to keys from db
  
    const newMovie = new myMovies({
      title: theTitle,
      plot: thePlot,
      genre: theGenre,
    
  
    })
  
    newMovie.save()
    .then(movie => {
      console.log(movie)
    })
    .catch(theError => {res.render('/movies/new/movie')})
  
    // res.redirect('/')
    res.redirect('/movies/'+ newMovie._id)
  })



  router.post('/movies/delete/:id', function(req, res){
    const movieId = req.params.id
    const theMovie = myMovies.findByIdAndRemove(movieId)
    .then(movie => {
    
    })
    .catch(error => {
      console.log(error);
    })
    res.redirect('/movies')
    })


    router.get('/movies/:id/edit', function (req, res) {
      myMovies.findById(req.params.id)
      .then(theMovie =>{
        res.render('movies/edit', {movie: theMovie} )
      })
    
    })
    
    
    
    router.post('/movies/:id/update', function (req, res){

    
      myMovies.findByIdAndUpdate(req.params.id, {
        title: req.body.theTitle,
        genre: req.body.theGenre,
        plot : req.body.thePlot,

      })
      .then(movie => {
        console.log(movie)
     })
     .catch(theError => {console.log(theError)})
  

    
     res.redirect('/movies/'+req.params.id)
    })  











module.exports = router;
