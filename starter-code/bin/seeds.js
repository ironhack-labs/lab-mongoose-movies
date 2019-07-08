const mongoose = require('mongoose');
const celebrity= require('../models/celebrities');
const movie = require('../models/movies')
const dbName = 'lab-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

// let celebrities = [
//   {
//     name: 'Daffy Duck the Wizard',
//     occupation: 'The undeterred wizard',
//     catchPhrase: 'The Wizard is undeterred !'
//   },
//   {
//     name: 'Dean Winchester',
//     occupation: 'Demon hunter',
//     catchPhrase: 'Save people, hunt thing and the family business'
//   },
//   {
//     name: 'Pegasus Seiya',
//     occupation: 'Athena Saint',
//     catchPhrase: 'Pegasus Ryu sei ken!'
//   }
// ]

// celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close();
// });

let movies = [
  {
    title: 'Mount python and the Holy Grail',
    genre: 'Comedy',
    plot: 'Adventure for the Holy Grail'
  },
  {
    title: 'Batman',
    genre: 'Action',
    plot: 'Batman fights coring and blablabla'
  },
  {
    title: 'Brave Heart',
    genre: 'Epic',
    plot: 'A warrior doing his story for FREEEEEEEEEEEEEDOOOOOOOOOOM!'
  }
]

movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});