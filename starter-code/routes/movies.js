var express = require("express");
var router = express.Router();

//Llamar al modelo que hemos creado
const Movie = require("../models/movie.js");

//## Iteration #8: Listing Our Movies
router.get("/", (req, res, next) => {
  //Llamar al modelo y utilizar el método find
  Movie.find().then(
    //Almacenamos todo en allMovies
    function (allMovies) {
      //console.log("Celebrities", allCeleb);
      //renderizamos movies/index con los datos de allCeleb
      res.render("movies/index", { allMovies });
    },
    function (error) {
      console.log("Error while getting the books from the DB: ", error);
    }
  );
});

module.exports = router;