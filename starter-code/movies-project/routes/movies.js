const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");


//GET movies
router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(movies => {
        res.render("movies/index", {movies});
      })
      .catch(error => {
        console.log(error)
    })
});


//GET Details
router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
      .then(movies => {
        res.render("movies/show", {movies});
      })
      .catch(error => {
        console.log(error)
    })
});

//GET New
router.get('/newMovie', (req, res, next) => {
        res.render("movies/newMovie");
});

router.post("/newMovie", (req, res) => {
    const { title, genre, plot } = req.body;
    const movie = new Movie({ title, genre, plot });
    movie.save( err => {
        if (err) {
            return next(err)
        }
        res.redirect('/movies');
  });
});

//DELETE movie
router.post("/movies/:id/delete", (req, res) => {
    Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'))   
});

//EDIT movie
router.get("/movies/edit/:id", (req, res, next) => {
    let movieId = req.params.id;
    Movie.findOne({'_id': movieId})
    .then(movie => {
        res.render("movies/edit", movie);
    })
    .catch(error => {
        console.log(error)
    })
});

router.post("/movies/:id", (req, res, next) => {
    const { title, genre, plot } = req.body;
    Movie.findByIdAndUpdate(req.params.id, {$set: {title, genre, plot}})
    .then (() => {
        res.redirect("/movies");
    })
});

module.exports = router;
