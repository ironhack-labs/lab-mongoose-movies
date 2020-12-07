const express = require('express');
const router  = express.Router();
const Movies = require("../models/movie");


const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    console.log(movies)
    res.render("movies/index.hbs", { movies });
  } catch (err) {
    res.send(err);
  }
};
const getMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const movies = await Movies.findById(movieId);
    console.log(movies);
    res.render("movies/showmovie.hbs", movies);
  } catch (err) {
    console.log(err);
  }
};
const addNew = async (req, res) => {
  try {
    await Movies.create(req.body);
    const newMovie = await Movies.find();
    res.render("movies/newmovie.hbs", { newMovie });
  } catch (err) {
    console.log(err);
  }
};

const showform = (req,res) =>{
  res.render("movies/newmovie")
}

const deleteOne = async (req, res) => {
  try {
    const { movieId } = req.params;
    const removedOne = await Movies.findByIdAndRemove(movieId);
    console.log("Removed movie", removedOne);
    res.redirect("/movies");
  } catch (err) {
    console.error(err);
  }
};

router.get('/movies', getMovies)
.get('/showmovie/:movieId', getMovie)
.get('/newmovie', showform)
.post('/movies', addNew)
.post('/movies/:movieId/delete', deleteOne)

module.exports = router;