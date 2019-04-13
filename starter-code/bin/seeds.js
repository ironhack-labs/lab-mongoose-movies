/*
const Celebrity   = require('../models/celebrity.model');
const celebrities = require('../data/celebrities.json');
const mongoose    = require('mongoose');
require('../config/db.config');

Celebrity.create(celebrities)
  .then( (celebrities) => console.info(`${celebrities.length} new books added to the database`) )
  .catch( error => console.error(error) )
  .then( () => mongoose.connection.close() );
*/

const Movie   = require('../models/movie.model');
const movies = require('../data/movies.json');
const mongoose    = require('mongoose');
require('../config/db.config');

Movie.create(movies)
  .then( (movies) => console.info(`${movies.length} new movies added to the database`) )
  .catch( error => console.error(error) )
  .then( () => mongoose.connection.close() );