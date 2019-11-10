const express = require('express');
const router = express.Router();
const moviesModel = require('../models/Movies'); // create this variable to call our db

//iteration 8: GET movies page
router.get('/movies', (req, res, next) => { // url adress
  moviesModel
    .find()
    .then(dbRes => {
      res.render('movies/index', {
        moviesDisplay: dbRes
      });
    })
    .catch(error => {
      next(); // not sure about that
      console.log("error while retrieving movies view", error);
    });
});

console.log("inside the movies.js file !");

module.exports = router;