// bin/seeds.js

const mongoose = require('mongoose');
const Movies = require('../models/movies');

const DB_NAME = 'celebrityDB';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
  {
    title: 'Top Gun',
    genre: 'Action',
    plot: 'Flys a plane'
  },
  {
    title: 'Pretty Woman',
    genre: 'Drama',
    plot: 'A girl does something'
  },
  {
    title: 'Gladiator',
    genre: 'Action',
    plot: 'A lad figths'
  }
];

Movies.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});