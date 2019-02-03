const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

//const celebArray = [
//  {
//    name: 'Tom Cruise',
//    occupation: 'actor',
//    catchPhrase: 'Danger Zone',
//  },
//  {
//    name: 'Gillian Flynn',
//    occupation: 'author',
//    catchPhrase: 'Does anyone do anything profusely except apologize? Sweat, I guess.',
//  },
//  {
//    name: 'Frank Herbert',
//    occupation: 'author',
//    catchPhrase: 'The spice must flow',
//  },
//];
//
//Celebrity.create(celebArray, () => {
//  console.log('celebrity created');
//});


const movieArray = [
  {
    title: 'Star Wars: A Forlorn Saga',
    genre: 'Action',
    plot: 'A long time ago in a galaxy far, far away...',
  },
  {
    title: 'Star Wars: Where Did I Park My Falcon?',
    genre: 'Action',
    plot: 'A long time ago in a galaxy far, far away...',
  },
  {
    title: 'Star Wars: Another One',
    genre: 'Action',
    plot: 'A long time ago in a galaxy far, far away...',
  },
];

Movie.create(movieArray, () => {
  console.log('movies created');
});
