const express = require('express');
const router = express.Router();
const moviesModel = require('../models/Movies'); // create this variable to call our db collection

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

//iteration 9 : movies details
router.get('/movies/:id', (req, res, next) => {
    moviesModel
      .findOne({
        "_id": req.params.id // id = property of params which is property of req
      })
      .then(movie => {
        res.render('movies/show', { // render the show.hbs file
          movieShow: movie // movieShow renders an object and will let us to access its data in the show.hbs file
        });
        //console.log(movie); // movie is the object selected in the db when clicking
      })
      .catch(error => {
        next();
        console.log("error while retrieving show of a celebrity", error);
      });
  }

);

console.log("inside the movies.js file !");

module.exports = router;