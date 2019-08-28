const initialCelebrities = [
  {
    name: 'Monkey D. Luffy',
    occupation: 'Captain',
    catchPhrase: "I'm going to be the king of pirates!",
  },
  {
    name: 'Roronoa Zoro',
    occupation: 'Vice-captain',
    catchPhrase: 'Ahn?',
  },
  {
    name: 'Vinsmoke Sanji',
    occupation: 'Chef',
    catchPhrase: 'All blue!',
  },
];

const initialMovies = [
  {
    title: 'Inglorious Basterds',
    genre: 'Drama',
    plot: 'Alternate end to WWII',
  },
  {
    title: 'Pulp Fiction',
    genre: 'Drama',
    plot: 'Vincent Vega and Jules Winnfield are hitmen with a penchant for philosophical discussions',
  },
  {
    title: 'Django Unchained',
    genre: 'Drama',
    plot: 'Slave looking for freedom',
  },
];

const mongoose = require('mongoose');

// const Celebrity = require('../models/Celebrity');

const Movie = require('../models/Movie');

const dbName = 'starter-code';

mongoose.connect(`mongodb://localhost/${dbName}`);

// Celebrity.create(initialCelebrities, (err) => {
//   if (err) {
//     throw (err);
//   } else {
//     console.log(`Created ${initialCelebrities.length} celebrities`);
//   }
//   mongoose.connection.close();
// });

Movie.create(initialMovies, (err) => {
  if (err) {
    throw (err);
  } else {
    console.log(`Created ${initialMovies.length} movies`);
  }
  mongoose.connection.close();
});
