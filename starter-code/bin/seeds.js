const CelebrityModel = require('../models/celebrity.js');
const mongoose = require('../config/mongoose-setup.js');
const celebrities = [
  {
    name: 'Ale Poggi',
    occupation: 'Semi-professional cornholer',
    catchPhrase: 'Fundamentals.'
  },
  {
    name: 'Josh Morales',
    occupation: 'Semi-professional cornholer',
    catchPhrase: 'Im going pro.'
  },
  {
    name: 'Armando Acosta',
    occupation: 'Semi-professional cornholer',
    catchPhrase: 'Power-ups.'
  }
];
CelebrityModel.create(celebrities).then(celebrityResults => {
  console.log(`Inserted ${celebrityResults.length} celebrities`);
}).catch(error => {
  console.log('ERROR: ', error);
});
const MovieModel = require('../models/movie.js');
const movies = [
  {
  title: 'Batman',
  genre: 'Action',
  plot: 'Crazy guy in mask with throat cancer has cool gadgets.'
  }
];
MovieModel.create(movies).then(movieResults => {
  console.log(`Inserted ${movieResults.length} movies`);
}).catch(error => {
  console.log('ERROR: ', error);
});
