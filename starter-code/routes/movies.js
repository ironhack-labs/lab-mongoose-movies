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

router.get('/movies/:id', (req, res, next) => {  //pour afficher le detail par movie dans show.hbs
  let movieId = req.params.id;
  Movie.findOne({_id: movieId}) 
    .then(movie => {
      res.render("movies/show", { movie }) //attention syntaxe , ici vert = url et movie = info bdd
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router; //toujours mettre en fin de fichier .js
