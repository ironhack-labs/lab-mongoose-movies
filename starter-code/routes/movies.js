const express = require('express'); //remettre sur chaque fichier .js
const router  = express.Router(); //remettre sur chaque fichier .js
const Movie = require("../models/movie")

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(movies => {
        res.render("movies", { movies });
    })
      .catch(error => {
        console.log(error)
      })
  });

  module.exports = router; //toujours mettre en fin de fichier .js
