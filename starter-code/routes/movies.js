const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();



router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((movies) => {
            //console.log(movies)
            res.render("movies/index", {movies})

        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
});

router.get("/movies/:movieId", (req, res, next) => {
    
    Movie.findById(req.params.movieId)
        .then((movieDetails) => {

            res.render("movies/show", {movieDetails})

        })
        .catch(err => {
            console.log(`Error: ${err}`)
            next()
        });
});
//to add a new movie
router.get("/movies/new", (req, res, next) => {
    
    Movie.findById(req.params.movieId)
        .then((newMovie) => {

            res.render("movies/new", {newMovie})

        })
        .catch(err => {
            console.log(`Error: ${err}`)
            next()
        });
});

router.post("/movies/new", (req, res, next) => {
    Movie.create(req.body)
        
      .then((movieDetails) => {
        console.log("your movie is saved in the DB!")
        res.redirect("/movies");
      }) 
      .catch(err => {console.log(`Error: ${err}`)});
  });

//to delete a movie  

router.post('/movies/:movieId/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.movieId)
    .then( () => {
      res.redirect("/movies")
    })
    .catch(err => {console.log(`Error: ${err}`)
    next()
    });
});

//to edit a movie
router.get('/movies/:movieId/movie-edit', (req, res, next) => {
    Movie.findById(req.params.movieId)
      .then(movie => {
        res.render("movies/movie-edit", movie);
      })
      .catch(err => {console.log(`Error: ${err}`)});
  });


router.post('/movies/:movieId/movie-edit', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.movieId, req.body, { new: true })
      .then(movieDetails => {
        res.redirect(`/movies/${movieDetails._id}`);
      })
      .catch(err => {console.log(`Error: ${err}`)});
  });


  
module.exports = router;