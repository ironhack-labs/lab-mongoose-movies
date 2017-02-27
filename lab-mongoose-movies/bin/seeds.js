const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseMovies');

//const CelebrityModel = require('../models/celebrities.js');

// const celebrities = [
//   {
//     name: 'Donald Trump',
//     occupation: 'President',
//     catchPhrase: 'Hyooge!'
//   },
//   {
//     name: 'Ronnie Coleman',
//     occupation: 'Mr. Olympia',
//     catchPhrase: 'Yeah Buddy!'
//   },
//   {
//     name: 'Liam Neeson',
//     occupation: 'Assassin',
//     catchPhrase: 'I will find you...and I will kill you.'
//   }
// ];

const MovieModel = require('../models/movies.js');

const movies = [
  {
    title: 'Hillary has Fallen',
    genre: 'Thriller',
    plot: "An exciting journey through a campaign that toppled a political criminal's dreams"
  },
  {
    title: 'Supersize Jeremy',
    genre: 'Documentary',
    plot: "Follow Jeremy through a harrowing journey of programming and fast food"
  },
  {
    title: 'The Missing Bracket',
    genre: 'Horror',
    plot: "A terrifying 7 hour film tracking a bug that was only a missing bracket"
  }
];


// CelebrityModel.create(celebrities, (err, celebDocs) => {
//   if (err) {
//     next(err);
//     return;
//   }

//   celebDocs.forEach((celebrity) => {
//     console.log(`${celebrity.name}, ${celebrity.occupation}, ${celebrity.catchPhrase}`);
//   });
// });

MovieModel.create(movies, (err, movieDocs) => {
  if (err) {
    next(err);
    return;
  }

  movieDocs.forEach((movie) => {
    console.log(`${movie.title}, ${movie.genre}, ${movie.plot}`);
  });
});
