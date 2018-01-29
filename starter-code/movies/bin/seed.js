const mongoose = require('mongoose');
const { url, dbName } = require('../config');

mongoose.connect(`mongodb://${url}/${dbName}`);

// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// const celebrities = [
//   {
//     name: 'Alex Bretones',
//     occupation: 'student',
//     catchPhrase: 'Más quisiera el gato lamer el plato.',
//   },
//   {
//     name: 'Bill Murray',
//     occupation: 'actor',
//     catchPhrase: 'I realized the more fun I had, the more relaxed I was working, the better I worked.',
//   },
//   {
//     name: 'Antonio Zambujo',
//     occupation: 'singer',
//     catchPhrase: 'Vem a dar uma voltinha na minha lambreta.',
//   },
// ];

// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     console.log('ERROR = ', err);
//   } else {
//     docs.forEach((doc, index) => {
//       console.log(`doc ${doc} inserted at position ${index}`);
//     });
//   }
// });

const movies = [
  {
    title: 'El Último Socio',
    genre: 'drama',
    plot: 'In a group of friends, one of them, make a fake suicide to go back join the group again.',
  },
  {
    title: 'Ghostbusters',
    genre: 'comedy',
    plot: 'An enterprise to catch ghosts in New York.',
  },
  {
    title: 'Terminator',
    genre: 'science-fiction',
    plot: 'Half human, half robot',
  },
];

Movie.create(movies, (err, docs) => {
  if (err) {
    console.log('ERROR = ', err);
  } else {
    docs.forEach((doc, index) => {
      console.log(`doc ${doc} inserted at position ${index}`);
    });
  }
});