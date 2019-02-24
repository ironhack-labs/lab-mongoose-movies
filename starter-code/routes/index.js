const express = require('express');
const app  = express();
const MyMovieModel = require('../models/movie');

app.get('/', (req, res) =>{ 
  MyMovieModel.find({}, (err, movies) => err ? res.send(err) : res.render('index', {movies}))
});


module.exports = app;
