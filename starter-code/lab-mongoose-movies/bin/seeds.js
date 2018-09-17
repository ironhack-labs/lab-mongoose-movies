//LEO FAN!!


const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
      name: "Leonardo DiCaprio",
      occupation: "Actor",
      catchPhrase: "If you can do what you do best and be happy, you're further along in life than most people."
    },
    {
      name: "Kate Winslet",
      occupation: "Actress",
      catchPhrase: "It's very easy to be judgmental until you know someone's truth."
    },
    {
      name: "Tom Hardy",
      occupation: "Actor",
      catchPhrase: "It doesn’t matter who you are. What matters is your plan."
    }
  
]


Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
});


const movies = [
  {
    title: "Titanic",
    plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genre: "Drama, Romantic"
  },
  {
    title: "Inception",
    plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genre: "Action, Thriller"
  },
  {
    title: "The Wolf of Wallstreet",
    plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genre: "Comedy, Drama"
  }

]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});