const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');
const mongoose = require('mongoose');

const celebrities = [
  {
    name: 'Britney Spears',
    occupation: 'Singer',
    catchPhrase: 'Baby, one more time'
  },
  {
    name: 'Mike Jagger',
    occupation: 'Singer',
    catchPhrase: 'No satisfaction'
  },
  {
    name: 'Bruce Lee',
    occupation: 'Actor',
    catchPhrase: 'Empty your mind'
  }
];

const movies = [
  {
    title: 'Equalizer',
    genre: 'Action',
    plot: 'Killing and revenge'
  },
  {
    title: 'The Hobbit',
    genre: 'Adventure',
    plot: 'Quest to find the ring'
  },
  {
    title: 'Pulp Fiction',
    genre: 'Drama',
    plot: 'Life in LA'
  }
];

// Populate DB with celebrities
// mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true })
//   .then(() => {
//     console.log('connected to db');
//     return Celebrity.create(celebrities);
//   }).then((data) => {
//     console.log('created data', data);
//   }).then(() => {
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log(error);
//     mongoose.connection.close();
//   });

// Populate DB with movies
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Movie.create(movies);
  }).then((data) => {
    console.log('created data', data);
  }).then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
