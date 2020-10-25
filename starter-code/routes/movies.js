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

//## Iteration #10: Adding New Movies
//GET: Show a form to create a movie
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});
//POST: Send the data from the form to this route to create the movie and save to the database
router.post("/", (req, res, next) => {
  //obtener los datos del formulario y almacenarlos en nuevas variables (desestructurar del **req.body**).
  const { title, genre, plot } = req.body;
  console.log(req.body);
  //crear un nuevo Movie usando el modelo que importamos.
  const newMovie = new Movie({ title, genre, plot });
  //almacenar el nuevo movie en la base de datos, utilizando el método save()
  newMovie.save().then(
    function (data) {
      res.redirect("/movies");
    },
    function (err) {
      console.log("Something went wrong!", err);
      res.redirect("movies/new");
    }
  );
});

//## Iteration #11: Deleting Movies
router.post("/:id/delete", (req, res, next) => {
  // traemos el id a través de params, y lo metemos en una variable
  let movieId = req.params.id;
  console.log(movieId);
  Movie.findByIdAndRemove(movieId).then(
    //Almacenamos todo en data
    function (data) {
      res.redirect("/movies");
    },
    function (error) {
      next(error);
      console.log("Error while getting the books from the DB: ", error);
    }
  );
});

//## Iteration #12 (Bonus): Editing Movies
//GET: mostrar el formulario con los campos completados
router.get("/:id/edit", (req, res, next) => {

  let movieId = req.params.id;
  console.log(movieId)
  Movie.findById(movieId).then(
    function(data) {
      
      res.render("movies/edit", {data})
    },
    function (error) {
      next(error);
      console.log("Error while getting the books from the DB: ", error);
    }
  )
})
//POST actualizar la información
router.post("/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  let movieId = req.params.id;
  Movie.update(
    { _id: movieId },
    { $set: { title, genre, plot } },
    { new: true }
  ).then(
    function (data) {
      res.redirect("/movies");
    },
    function (err) {
      next(error);
      console.log("Something went wrong!", err);
    }
  );
});


//## Iteration #9: The Movie Details Page
router.get("/:id", (req, res, next) => {
  // traemos el id a través de params, y lo metemos en una variable
  let movieId = req.params.id;
  Movie.findById(movieId).then(
    function (data) {
      console.log("Movie Details", data);
      res.render("movies/show", { data });
    },
    function (err) {
      console.error(err);
    }
  );
});

module.exports = router;
