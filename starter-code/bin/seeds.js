const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// const celebrities = [
//   {
//     name: 'Tom Cruise',
//     occupation: 'Actor',
//     catchPhrase: 'Top gun',
//   },
//   {
//     name: 'Beyonce',
//     occupation: 'Singer',
//     catchPhrase: 'wow',
//   },
//   {
//     name: 'Daffy Duck',
//     occupation: 'Comedian',
//     catchPhrase: 'hahaha',
//   },
// ];

// mongoose.connect('mongodb://localhost:27017/mongoose-movies', { useNewUrlParser: true })
//   .then(() => {
//     console.log('connected to db');
//     return Celebrity.create(celebrities);
//   })
//   .then((data) => {
//     console.log('Created initial celebrity', data);
//   })
//   .then(() => {
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log(error);
//     mongoose.connection.close();
//   });

const movies = [
  {
    title: 'aaa',
    genre: 'aaa',
    plot: 'aaa',
  },
  {
    title: 'bbb',
    genre: 'bbb',
    plot: 'bbb',
  },
  {
    title: 'ccc',
    genre: 'ccc',
    plot: 'ccc',
  },
];

mongoose.connect('mongodb://localhost:27017/mongoose-movies', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Movie.create(movies);
  })
  .then((data) => {
    console.log('Created initial movie', data);
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
