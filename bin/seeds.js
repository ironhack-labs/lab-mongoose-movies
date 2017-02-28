const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moongooseMovies');
// mongoose.connect('mongodb://localhost/elebrities');

// const Celebrity = require('../models/celebrity.js');
//
// const celebrities = [
//   {
//     name: 'Bernie Sanders',
//     occupation: 'Politician',
//     catchPhrase: 'In my view, a corporation is not a person.',
//   },
//   {
//     name: 'Keith Richards',
//     occupation: 'Musician',
//     catchPhrase: 'I look for ambiguity when I am writing because life is ambiguous'
//   },
//   {
//     name: 'Jhonny Depp',
//     occupation: 'Actor',
//     catchPhrase: 'I do not pretend to be captain weird. I just do what I do.'
//   }
// ];
//
// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//
//   docs.forEach((oneCelebrity) => {
//     console.log(`${oneCelebrity.name} ${oneCelebrity._id}`);
//   });

const Movie = require('../models/movie.js');

const movies = [
  {
    title: 'The Crooks of Wallstreet',
    genre: 'Comedy',
    plot: 'Satire of the cold truth of the US economy.',
  },
  {
    title: 'Standing Rock and Roll',
    genre: 'Documentary',
    plot: 'How celebrities changed events in the construction of the oil pipeline first in North Dakota and then the rest of the US.'
  },
  {
    title: 'Trumping Trump',
    genre: 'Action',
    plot: 'How the nation united to empeach former president Trump and Bernie finally became president.'
  }
];

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((oneMovie) => {
    console.log(`${oneMovie.name} ${oneMovie._id}`);
  });


  mongoose.disconnect();
});
