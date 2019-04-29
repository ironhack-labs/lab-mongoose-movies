const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: 'Kit Harington',
//     occupation: 'King of the North',
//     catchPhrase: 'Winter is coming.'
//   },
//   {
//     name: 'Emilia Clarke',
//     occupation: 'Mother of Dragons',
//     catchPhrase: 'Bend the knee.'
//   },
//   {
//     name: 'Peter Dinklage',
//     occupation: 'Strategist',
//     catchPhrase: 'I drink and I know things.'
//   }
// ];

// Celebrity.create(celebrities, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebrities.length} celebrity profiles`);
//   mongoose.connection.close();
// });

const movies = [
  {
    title: 'Game of Thrones',
    genre: 'Adventure',
    plot: 'Winter is HERE'
  },
  {
    title: 'The Iron Throne',
    genre: 'Horror',
    plot: 'Aria wins'
  },
  {
    title: 'Jon Snow Dies in the End',
    genre: 'Drama',
    plot: 'RIP'
  }
];

Movie.create(movies, err => {
  if (err) throw err;
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
