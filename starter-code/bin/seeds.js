// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// const dbName = 'Celebrity-project';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebs = [
//   {
//     name: "Nicolas Cage",
//     occupation: "actor",
//     catchPhrase: "Yeah"
//   },
//   {
//     name: "Tom Cruise",
//     occupation: "actor",
//     catchPhrase: "Yeah"
//   },
//   {
//     name: "Britney Spears",
//     occupation: "singer",
//     catchPhrase: "Yeah"
//   },
//   {
//     name: "Katy Perry",
//     occupation: "singer",
//     catchPhrase: "Yeah"
//   },
//   {
//     name: "Berto Romero",
//     occupation: "actor",
//     catchPhrase: "oh mamma"
//   }
// ];

// Celebrity.create(celebs, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebs.length} celebs`)
//   mongoose.connection.close()
// });

const mongoose = require('mongoose');
const Movies = require('../models/Movie');

const dbName = 'Celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Bambi",
    genre: "Drama",
    plot: "pasdjvbperubgvoubndsuh[oasbngjnj djk "
  },
  {
    title: "Dracula",
    genre: "Terror",
    plot: "pasdjvbperubgvoubndsuh[oasbngjnj djk "
  },
  {
    title: "Titanic",
    genre: "Drama",
    plot: "pasdjvbperubgvoubndsuh[oasbngjnj djk "
  },
  {
    title: "Wall-e",
    genre: "Comedy",
    plot: "pasdjvbperubgvoubndsuh[oasbngjnj djk "
  },
  {
    title: "Rambo",
    genre: "Comedy",
    plot: "pasdjvbperubgvoubndsuh[oasbngjnj djk "
  }
];

Movies.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});