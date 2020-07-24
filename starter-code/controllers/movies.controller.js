const mongoose = require('mongoose')
const Movies = require('../models/Movie.model')

const express = require('express');

const router = express.Router();

module.exports.home = (req, res, next) => {
  res.render('index')
}
module.exports.showMovies = (req, res, next) => {
  Movies.find({})
    .then(allMovs => res.render('movies/index', { allMovs }))
    .catch(error => console.log('Error found'))
}

module.exports.showDetails = (req, res, next) => {
  Movies.findById(req.params.id)
    .then(mov => res.render('movies/show', mov))
    .catch(error => console.log(`Founded error in detail page`, error))
};

module.exports.createMov = (req, res, next) => {
  res.render('movies/new')
}

module.exports.doCreateMov = (req, res, next) => {
  const movie = new Movies(req.body)
  movie.save()
    .then(() => res.redirect('/movies'))
    .catch((e) => res.send('algohaidomalqueputada'))
}

module.exports.editMov = (req, res, next) => {
  Movies.findById(req.params.id)
  .then(mov => res.render('movies/edit', mov))
  .catch(error => console.log(`Founded error in editing page`, error))
};


module.exports.doEditMov = (req, res, next) => {
  console.log('hola')
  Movies.findByIdAndUpdate(req.params.id, req.body)
    .then(drone => res.redirect('/movies'))
    .catch(error => console.log(`Error when editing`))
}


module.exports.deleteMovie = (req, res, next) => {
    Movies.findByIdAndDelete(req.params.id)
    .then(movie => {
      console.log('Movie succesfully deleted')
      res.redirect('/movies')
  })
    .catch(error => console.log(`Founded error in delete page`, error))
  }
  