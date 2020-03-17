const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose")
const Movie = require("../models/movies")



module.exports = router;


router.get('/', async (req, res, next) => {
  try {
    movies = await Movie.find()
    res.render('movies/movies', {movies});
  } catch {
    (err)=> console.error("There was an error: ",err)}  
  }
);


router.get('/movie-details/:id', async (req, res, next) => {
  try {
    movies = await Movie.findById(req.params.id)
    res.render('movies/movie-details', movies);
  } catch {
    next();
    (err)=> console.error("There was an error: ",err)}  
  }
);

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/', async (req, res, next) => {
  try {
    const {title, genre, plot, image} = req.body
    await Movie.create({title, genre, plot, image})
    res.redirect('/movies/');
  } catch {
    next();
    (err)=> console.error("There was an error: ",err)}  
  }
);

router.get('/movie-delete/:id', async (req, res, next) => {
  try {
    movies = await Movie.findByIdAndRemove(req.params.id)
    res.redirect('/movies/');
  } catch {
    next();
    (err)=> console.error("There was an error: ",err)}  
  }
);

router.get('/movie-edit/:id', async (req, res, next) => {
  try {
    movie = await Movie.findById(req.params.id)
    res.render('movies/edit', movie);
  } catch {
    next();
    (err)=> console.error("There was an error: ",err)}  
  }
);

router.post("/:id", async (req,res,next) =>{
 try {
  const {title, genre, plot, image}= req.body
  await Movie.update({_id: req.params.id}, {$set: {title, genre, plot, image}}, {new: true})
  res.redirect("/movies/")
  } catch {
  next();
  (err)=> console.error("There was an error: ",err)}  
}
);

