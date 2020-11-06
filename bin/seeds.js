// bin/seeds.js

const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

const DB_NAME = 'movies-project';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
  {
    title: 'movie name',
    genre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    plot: 'Lorem ipsum dolor sit amet',
  },
  {
    title: 'movie name',
    genre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    plot: 'Lorem ipsum dolor sit amet',
  },  
  {
    title: 'movie name',
    genre: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    plot: 'Lorem ipsum dolor sit amet',
  }
];

Movie.create(movies)
  .then(respond => {
    console.log(`Created ${respond.length} movies`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while getting books from the DB: ${err}`));
