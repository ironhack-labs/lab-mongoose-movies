const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/celebrities');
//
// const Celebrity = require('../models/celebrity-model.js');
//
// const celebrities = [
//   {
//     name: 'Frank Sinatra',
//     occupation: 'Singer',
//     catchPhrase: 'Alcohol may be man\'s worst enemy, but the bible says love your enemy.',
//   },
//   {
//     name: 'Quentin Tarantino',
//     occupation: 'Director',
//     catchPhrase: 'Violence is one of the most fun things to watch.',
//   },
//   {
//     name: 'Salvador Dali',
//     occupation: 'Painter',
//     catchPhrase: 'I don\'t do drugs. I am drugs.',
//   }
// ];
//
// Celebrity.create( celebrities, (err, celebrityDocs) => {
//   if(err){
//     throw err;
//   }
//
//   celebrityDocs.forEach((oneCelebrity) => {
//     console.log(`New Celebrity ${oneCelebrity.name} -> ${oneCelebrity._id}`);
//   });
// });

mongoose.connect('mongodb://localhost/celebrities');

const Movie = require('../models/movie-model.js');

const movies = [
  {
    name: 'Batman',
    genre: 'Action',
    plot: 'A billionaire devotes his fortune to cosplay and beating up the mentally ill.',
  },
  {
    name: 'Titanic',
    genre: 'Drama',
    plot: 'A lot of people take the Ice Bucket Challenge. It doesn\'t end well.',
  },
  {
    name: 'Shrek',
    genre: 'Animation',
    plot: 'A guy learns to love a girl without her Instagram filters.',
  }
];

Movie.create( movies, (err, movieDocs) => {
  if(err){
    throw err;
  }

  movieDocs.forEach((oneMovie) => {
    console.log(`New Movie ${oneMovie.name} -> ${oneMovie._id}`);
  });
});
