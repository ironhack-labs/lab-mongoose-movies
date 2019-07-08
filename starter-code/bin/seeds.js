const mongoose = require('mongoose');
const Celebs = require('../models/celebrity');
const Movie = require('../models/movies');

const dbName = 'the-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

// const celebrities = [
//   {
//     name: 'Denzel Washington',
//     accupation: 'Greatest Actor Ever',
//     catchPhrase: 'My man!'
//   },
//   {
//     name: 'Britney Spears',
//     accupation: 'Singer',
//     catchPhrase: `It's Britney bitch!` 
//   },
//   {
//     name: 'Matthew Mcconaughey',
//     accupation: 'Actor',
//     catchPhrase: 'Alright alright alright!'
//   }
// ];

// Celebs.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} movies`)
//   mongoose.connection.close();
// });

const movies = [
  {
    name: 'Star Wars: A New Hope',
    genre: 'Sci-fi',
    plot: 'Luke Skywalker must rescue the princess and learn the ways of the Jedi from the mysterious Ben Kenobi.'
  },
  {
    name: 'Star Wars: The Empire Strikes Back',
    genre: 'Sci-fi',
    plot: 'The Rebel Alliance must do all it can to survive a surpise attack, meanwhile, Luke Skywalker trains in the Jedi arts with Master Yoda'
  },
  {
    name: 'Star Wars: Return of the Jedi',
    genre: 'Sci-fi',
    plot: `Rescue Han Solo, and defeat Darth Vader, Bobba Fett didn't do anything.`
  },
];

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});