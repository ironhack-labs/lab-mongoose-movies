const express = require('express');

//require celebrities model 
const router = express.Router();
const MovieModel = require('../models/movie');


//display celebrities and list on localhost:3000/celebrities
router.get('/movies', (req,res, next) => {
    MovieModel.find()
    .then(allTheMoviesFromDB => {
        console.log(allTheMoviesFromDB)
        res.render('movies/index',{movies: allTheMoviesFromDB})
    })
    .catch(err=> {
        console.log(`Err While getting the Movies from the DB: ${err}`)
      })
})

module.exports = router;