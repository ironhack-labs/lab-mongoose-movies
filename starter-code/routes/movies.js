const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');

router.get('/movies', (req,res, next)=>{
  Movie.find()
  .then((thingFromDb) => {
    console.log(thingFromDb);
   res.render('movies/index', {alltheMovies: thingFromDb})
  })
  .catch((err) =>{
    console.log(err);
  })
});








module.exports = router;