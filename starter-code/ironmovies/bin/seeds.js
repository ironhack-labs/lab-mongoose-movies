// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/famous-people', {useMongoClient: true});
// const Celebrity= require('../models/Celebrity');
//
// const celebData = [
//   { name: 'Ronaldo', occupation: 'Player', catchPhrase: 'Siiiiuuuuhhh' },
//   { name: 'Puigdemont', occupation: 'Politician', catchPhrase: 'Espanya ens roba' },
//   { name: 'Leticia Sabater', occupation: 'unknown', catchPhrase: "El Pepinazo" }
// ];
//
// Celebrity.create(celebData, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//
//     docs.forEach((celeb) => {
//       console.log(celeb.name);
//     });
//     mongoose.connection.close();
//   });

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});
const Movie= require('../models/movie');

const movieData = [
  { title: 'Rocky V', genre: 'Action', plot: 'Rocky has to win again' },
  { title: 'Titanic', genre: 'Drama', plot: 'The ship ends badly' },
  { title: 'Spiderman', genre: 'Superhero', plot: "Weird half human half spider" }
];

Movie.collection.drop();

Movie.create(movieData, (err, docs) => {
  if (err) {
    throw err;
  }

    docs.forEach((movie) => {
      console.log(movie.title);
    });
    mongoose.connection.close();
  });
