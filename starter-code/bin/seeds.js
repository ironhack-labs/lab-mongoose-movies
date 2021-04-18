const movies = require('../data');
const Movie = require('../models/Movie.model');
const mongoose = require('mongoose');
const DB_NAME = 'movies-app';

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
  .then(() => {
    console.log('Connected to database only to create the first information');

    Movie.insertMany(movies)
      .then(movies => {
        console.log(`${movies.length} inserted.`)
      })
  })
  .catch(error => console.error(error))
