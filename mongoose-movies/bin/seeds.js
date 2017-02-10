const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/celebritiesMongoose');
const Movies = require('../models/movies');
// const Celebrity = require('../models/celebrities');

const movies = [
  {
    title: 'Against stupidity, the gods themselves contend in vain',
    genre: 'Science-Fiction',
    plot: 'The discovery of a new source of apparently unlimited energy changes the world as we think of it.',
  },
  {
    title: "It's bad for ya!",
    genre: 'Comedy',
    plot: 'Just some funny shit...',
  },
  {
    title: 'The universe in a nutshell',
    genre: 'Science divulgation',
    plot: 'Well... Science!',
  }
];

Movies.create(movies, (err, docs) => {
  if (err) throw err;
  docs.forEach( (movies) => {
    console.log(movies.title);
  });
  mongoose.connection.close();
});

// const celebrities = [
//   {
//     name: 'Issac Asimov',
//     occupation: 'Writer',
//     catchPhrase: 'People who think they know everything are a great annoyance to those of us who do.',
//   },
//   {
//     name: 'George Carlin',
//     occupation: 'Comediant',
//     catchPhrase: 'Inside every cynical person, there is a disappointed idealist.',
//   },
//   {
//     name: 'Stephen Hawking',
//     occupation: 'Theoretical phisicits',
//     catchPhrase: "Life would be tragic if it weren't funny",
//   }
// ];
//
// Celebrity.create(celebrities, (err, docs) => {
//   if (err) { throw err; }
//
//   docs.forEach( (celebrities) => {
//     console.log(celebrities.name);
//   });
//   mongoose.connection.close();
// });
