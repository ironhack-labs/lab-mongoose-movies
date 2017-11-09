const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies', {useMongoClient: true});
const Celebrity = require('../models/celebrities');
const Movie = require('../models/movies');

//const celebrities = [
//  {
//    name: 'Mariano Rajoy',
//    occupation: 'President of the Government of Spain',
//    catchPhrase: '¿Y la europea?'
//  },
//  {
//    name: 'Julio Iglesias',
//    occupation: 'Singer',
//    catchPhrase: 'Soy tu padre y lo sabes'
//  },
//  {
//    name: 'Eduardo Inda',
//    occupation: 'Journalist',
//    catchPhrase: 'Tracatra'
//  }
//];

//Celebrity.collection.drop();

//Celebrity.create(celebrities, (err, docs) => {
//  if (err) { throw err; }
//  docs.forEach(celebrity => {
//    console.log(celebrity.name);
//  });
//  mongoose.connection.close();
//});

const movies = [
  {
    title: '50 shades of Grey',
    genre: 'Fantasy - All publics',
    plot: 'Piddling girl fall in love with fantasy boy'
  },
  {
    title: 'Tadeo Jones',
    genre: 'Historical - Adults Only ',
    plot: 'Super researcher solves ancient mistery'
  },
  {
    title: 'Terminator',
    genre: 'Cartoon - Parental Guidance Suggested',
    plot: 'Kind killer machine from the future bossing around'
  }
];

Movie.collection.drop();

Movie.create(movies, (err, docs) => {
  if (err) { throw err; }
  docs.forEach(movie => {
    console.log(movie.title);
  });
  mongoose.connection.close();
});
