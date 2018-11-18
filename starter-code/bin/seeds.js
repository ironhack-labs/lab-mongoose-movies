const mongoose = require('mongoose');

// const Celebrity = require('../models/Celebrity');

// const dbCelebrity = 'celebrity-proyect';
// mongoose.connect(`mongodb://localhost/${dbCelebrity}`);

// const celebrity = [
//   {
//     name:  'Tom Cruise',
//     occupation: 'actor',
//     catchPhrase: 'Hi, you'
//   },
//   {
//     name: 'Beyonce',
//     occupation: 'singer',
//     catchPhrase: 'I love pepe'
//   },
//   {
//     name:  'Daffy Duck',
//     occupation: 'comedian',
//     catchPhrase: 'duck, duck, duck'
//   }
// ]

// Celebrity.create(celebrity, (err) => {
//   if (err) {throw(err)}
//   console.log(`Created ${celebrity.length} celebrities`)
//   mongoose.connection.close()
// });

const Movie = require('../models/Movie');

const dbMovie = 'movies';
mongoose.connect(`mongodb://localhost/${dbMovie}`);

const movie = [
    {
      title:  'es',
      genre: 'es',
      plot: 'es'
    },
    {
      title:  'r',
      genre: 'r',
      plot: 'r'
    },
    {
      title:  't',
      genre: 'at',
      plot: 't'
    }
  ]

  Movie.create(movie, (err) => {
      if (err) {throw(err)}
      console.log(`Created ${movie.length} movies`)
      mongoose.connection.close()
    });
    