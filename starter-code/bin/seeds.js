const mongoose = require('mongoose');
//const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

const DB_NAME = 'mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
  {
    title: 'Pirates of the Caribbean',
    genre: 'Adventure',
    plot: 'blablabla1'
  },
  {
    title: 'The notebook',
    genre: 'Romance/Drama',
    plot: 'blablabla2'
  },
  {
    title: 'Schindlers list',
    genre: 'War/Drama',
    plot: 'blablabla3'
  }
]

Movie.create(movies)
.then(moviesfromDB => {
  console.log(`Created ${moviesfromDB.length} movies`);
mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));

// const celebrities = [
//     {
//       name: 'Johnny Depp',
//       occupation:
//         'Actor',
//       catchPhrase: 'Why is the rum gone?'
//     },
//     {
//         name: 'Donald Trump',
//         occupation:
//           'Us President',
//         catchPhrase: 'make America great again'
//       },
//       {
//         name: 'J.K Rowling',
//         occupation: "writer",
//         catchPhrase: 'I solemnly swear that I am up to no good.'
//       }
//     ]

// Celebrity.create(celebrities)
// .then(celebritiesfromDB => {
// console.log(`Created ${celebritiesfromDB.length} celebrities`);