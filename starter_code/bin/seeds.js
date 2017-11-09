const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mong-movies', { useMongoClient: true} );

// const Celebrity = require('../models/celebrity');
// const celebrities = [
//   {
//     name: 'C3PO',
//     occupation: 'Robot',
//     catchPhrase: 'Sir, the possibility of successfully navigating an asteroid field is approximately 3,720 to 1',
//   },
//   {
//     name: 'Yoda',
//     occupation: 'Jedi',
//     catchPhrase: 'In ironhack, you must believe',
//   },
//   {
//     name: 'R2D2',
//     occupation: 'Dealer',
//     catchPhrase: 'Beep boop bip beep boop?',
//   }
// ];
//
// Celebrity.collection.drop();
// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//   docs.forEach((celebrity) => {
//     console.log(celebrity.name)
//   });

const Movie = require('../models/movie');
const movies = [
  {
    title: 'The Matrix',
    genre: 'Sci-fi',
    plot: 'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix?',
  },
  {
    title: 'Star Wars: Episode IV',
    genre: 'Sci-fi',
    plot: 'The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire.',
  },
];

Movie.collection.drop();
Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((movie) => {
    console.log(movie.title)
  });

  mongoose.connection.close();
});
