const express = require('express');
const router = express.Router();

const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");


/* GET home page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(celebsFromDB=>{
      console.log(celebsFromDB)
      res.render('celebrity-views/celebrities', {celebs: celebsFromDB, user: req.session.currentUser});
    })
    .catch(err => next(err))
});

router.post('/celebrities', (req, res, next) => {
  const newCeleb = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
    movies: req.body.movies
  });

  newCeleb.save()
    .then(responseFromDB =>{
      res.redirect("/celebrities")
    })
    .catch(err =>{
      console.error("Error, creating character", err);
      res.redirect("/celebrities/new")
    })
});

router.get('/celebrities/new', (req, res, next) => {
  Movie.find()
    .then(moviesFromDB =>{
      res.render("celebrity-views/new", {movies: moviesFromDB, user: req.session.currentUser})
    })
    .catch(err => next(err))
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(resultFromDB => {
      Movie.find()
        .then(moviesFromDB =>{
          moviesFromDB.forEach((movie)=>{
            if(movie._id.equals(resultFromDB.movies)){
              movie.match = true;
            }
          })
          res.render("Celebrity-views/edit",{celeb: resultFromDB, movies : moviesFromDB, user: req.session.currentUser})
        })
    })
    .catch(err => next(err));
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(res.redirect("/celebrities"))
    .catch(err => next(err));
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).populate("movies")
  .then(celebFromDB => {
    res.render("celebrity-views/details", {celeb: celebFromDB, user: req.session.currentUser})
  })
  .catch(err => next(err))
});

router.post('/celebrities/:id', (req, res, next) => {
  const updatedCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
    movies: req.body.movies
  };

  Celebrity.findByIdAndUpdate(req.params.id, updatedCeleb)
  .then(resultFromDB => {
    res.redirect("/celebrities")
  })
  .catch(err => next(err))
});


module.exports = router;
