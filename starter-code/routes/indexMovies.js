const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*GET movies list*/
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies/index', {movies});
    })
    .catch(error => {
      console.log(error);
      next();     //Esto no lo entiendo muy bien!!!!
    })
});

/*GET new movie*/
router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

/*POST new movie*/
router.post("/movies/add", (req, res, next) => {
  const {title, genre, plot} = req.body;
  new Movie({title, genre, plot})
    .save().then(Movie => {
      console.log("Movie inserted succesfully!!!");
      res.redirect("/movies");
    });
});

/*GET movie info*/
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/show", movie); //Por qué celebrities va sin llaves???
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

/*GET movie to edit*/
router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/edit", movie); //Por qué movies va sin llaves???
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

/*POST edit movie*/
router.post("/movies/:id/edit", (req, res, next) => {
  console.log(req.body)
  const {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id, {title, genre, plot})
    .then(Movie => {
      console.log("Movie updated succesfully!!!");
      res.redirect("/movies");
    });
});

/*GET remove movie*/
router.get("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies"); 
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

module.exports = router;
