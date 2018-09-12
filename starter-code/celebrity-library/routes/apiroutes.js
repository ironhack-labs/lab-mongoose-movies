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
router.get('/movies/create', (req, res, next) => {
  const theTitle = req.body.title;
  const theDirector = req.body.director;
  const theImage = req.body.image;
  const theDescription = req.body.description;
  console.log(theStars)
   Movie.create({
      title: theTitle,
      director: theDirector,
      image: theImage,
      description:theDescription,
   })
   .then((response)=>{
    res.json(response);
})
.catch((err)=>{
    res.json(err);
})
});

module.exports = router;