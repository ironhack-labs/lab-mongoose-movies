require('../config/db.config')

const mongoose = require('mongoose');
const Celeb = require('../models/celeb.model');
const celebs = require('../data/celebs.json');
const Movie = require('../models/movie.model');
const movies = require('../data/movies.json')

// Celeb.create(celebs)
//   .then ((celebs) => console.info(celebs))
//   .catch(error => console.error(error))

Movie.create(movies)
.then ((movies) => console.info(movies))
.catch(error => console.error(error))
