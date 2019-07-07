const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'starter-code';
mongoose.connect('mongodb://localhost/starter-code');

const movies = [
  {
    title: 'Hora do Rush 7',
    genre: 'Action',
    plot: 'Explosions',
  },
  {
    title: 'Jasons vs Alien',
    genre: 'Terror',
    plot: 'Alien fights against an infestation of Jasons',
  },
  {
    title: 'Vin Diesel',
    genre: 'Drama',
    plot: 'Documentary about Vin Diesel\'s life',
  },
];

Movie.create(movies, (err) => {
  if (err) {
    throw(err);
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});

// const Celebrity = require('../models/celebrity');

// const dbName = 'starter-code';
// mongoose.connect('mongodb://localhost/starter-code');

// const celebrities = [
//   {
//     name: 'Salame Alado',
//     occupation: 'Estudante',
//     catchPhrase: 'Awi warabê',
//   },
//   {
//     name: 'Mel Gibson Brasileiro',
//     occupation: 'Judóca',
//     catchPhrase: 'Chamanxaxão',
//   },
//   {
//     name: 'Biru Lexton',
//     occupation: 'Jogodora de futsal aquático',
//     catchPhrase: 'Cêtembruxuve',
//   },
// ];

// Celebrity.create(celebrities, (err) => {
//   if (err) {
//     throw(err);
//   }
//   console.log(`Created ${celebrities.length} movies`);
//   mongoose.connection.close();
// });
