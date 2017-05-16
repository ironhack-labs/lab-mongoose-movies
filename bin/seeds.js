// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/celebrities');
//
// const Celebrity = require('../models/celebrity');
//
// const celebrities = [
//   {
//     name: 'Yoda',
//     occupation: 'Yedi trainer',
//     catchPhrase: 'May the force be with you',
//   },
//   {
//     name: 'Darth Vader',
//     occupation: 'Villan',
//     catchPhrase: 'I am your father',
//   },
//   {
//     name: 'R2D2',
//     occupation: 'Robot',
//     catchPhrase: 'I cant speeak',
//   }
// ];

// Celebrity.create(celebrities, (err, docs)=> {
//   if (err) {throw err};
//
//   docs.forEach( (celebrity) => {
//     console.log(celebrity.name)
//   })
//   mongoose.connection.close();
// });
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');

const Movie = require('../models/movies');

const movies = [
  {
    title: 'Return of the King',
    genre: 'Thriller',
    plot: 'Unexpected',
  },
  {
    title: 'Fall of the king',
    genre: 'Comededy',
    plot: 'Funny'
},
  {
    title: 'The return of the Prince',
    genre: 'None',
    plot: 'Jippie',
  }
];

Movie.create(movies, (err, docs)=> {
  if (err) {throw err};

  docs.forEach( (movie) => {
    console.log(movie.title)
  })
  mongoose.connection.close();
});
