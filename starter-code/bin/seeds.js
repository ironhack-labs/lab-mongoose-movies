const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrity-project';

mongoose.connect(`mongodb://localhost/${dbName}`);

/* const celebrities = [
  {
    name: "Suzanne Collins",
    occupation: "singer",
    catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Rihanna",
    occupation: "entertainer",
    catchPhrase: "Lorem ipsum dolor ...Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Flippers",
    occupation: "movie star",
    catchPhrase: "Lorem ipsum dolor.",
  }
]
Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} books`)
  mongoose.connection.close();
}); */

const Movie = require('../models/movie');

const movies = [
  {
    title: "Project",
    genre: "Thriller",
    plot: "Everyone Dies",
  },
  {
    title: "Flippers",
    genre: "movie star",
    plot: "Lorem ipsum dolor.",
  }
]
Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});