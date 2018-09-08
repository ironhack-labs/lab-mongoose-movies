const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')

/* GET home page */
router.get('/movies', (req, res, next) => {

  Movie.find()
  .then((movieData)=>{
      console.log('----------got the movies ---------')
      // console.log(movieData)
      res.render('movieList', {listOfMovies: movieData})
  })
  .catch((err)=>{
    console.log('----------No movies :( ---------')
  })
});




module.exports = router;