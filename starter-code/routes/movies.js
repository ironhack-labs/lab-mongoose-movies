const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies');

router.get('/', (req, res) => {
  Movies.find()
    .then( movies => {
      const data = {
        title: "Movies",
        movies: movies
      };
      res.render("movies/index", data);
    })
    .catch( err => console.log(err))
})

module.exports = router;