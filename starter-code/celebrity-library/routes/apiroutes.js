const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')
const Celebrity    = require('../models/celebrity')
const ensureLogin = require("connect-ensure-login");

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((listOfMovies)=>{
      res.json(listOfMovies)
  })
  .catch((err)=>{
      res.json(err);
  })
});

// /api is given in the app.js router 
router.post('/movies/create', (req, res, next) => {
  console.log('New movie to be added:--------=-=-=-=',req.body)
   Movie.create({
      title: req.body.title,
      director: req.body.director,
      image: req.body.image,
      description:req.body.description,
   })
   .then((response)=>{
    res.json(response);
   })
   .catch((err)=>{
  console.log('the error from creating movie------',err)
    res.json(err);
})
});

module.exports = router;