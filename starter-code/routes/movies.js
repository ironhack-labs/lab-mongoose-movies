const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies.js');

router.get('/movies', (req, res) => {
    Movies.find()
     .then((allTheMoviesFromDB) => {
          res.render("movies/index", {movies: allTheMoviesFromDB});
        });
      })
  






//Adding Movies

router.get('/movies/new', (req, res) => {
    Movies.find() 
    .then((allTheMoviesFromDB) => {
      res.render('movies/new', {movies: allTheMoviesFromDB});
    })
});

router.post('/movies/new', (req, res) => { 
    let {title, genre, plot} = req.body 
    Movies.create({
      title,
      genre,
      plot
    }).then(() => {
      res.redirect('/movies'); 
  });
});
  

////Delete Movies

router.post('/movies/:moviesId/delete', (req, res) => {
    let moviesId = req.params.moviesId;
    Movies.findByIdAndDelete(moviesId) 
    .then(() => {
      res.redirect('/movies');
    })
  
  });

  
  
////Edit 

router.get('/movies/:moviesId/edit', (req, res) => {
    let moviesId = req.params.moviesId;
    Movies.findById(moviesId)
      .then((theMoviesFound) => {
          res.render('movies/edit', {movies: theMoviesFound}); 
        })
     });


router.post('/movies/:moviesId', (req, res) => {
        let moviesId = req.params.moviesId;
        let {title, genre, plot} = req.body;
        Movies.findByIdAndUpdate(moviesId, { 
         title,
         genre,
         plot
        }).then (() => {
          res.redirect('/movies');
        });
      
      });








//Movie details Route

 router.get('/movies/:moviesId', (req, res) => {
        let moviesId = req.params.moviesId;
        //get book using id that is on the route
        //find book on MongoDB using the book id
        Movies.findById(moviesId)
            .then((theMoviesFound) => {
                console.log(theMoviesFound);
            res.render("movies/show", {movies: theMoviesFound});
          })
          .catch((err) => {
            res.render('error', {err})
              })
      });
























module.exports= router 