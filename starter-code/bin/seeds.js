const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const DB_NAME = 'movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: 'Chuck Norris',
    occupation: 'actor',
    catchPhrase:'Chuck Norris can pick oranges from an apple tree and make the best lemonade you have ever tasted.'
  },
  {
    name: 'Jimmy Fallon',
    occupation:'comedian',
    catchPhrase:'Thank you… fat dude with giant headphones on the subway, for looking like what would’ve happened if Jabba the Hutt mated with Princess Leia.'
  },
  {
    name: 'Bill Gates',
    occupation: 'software developer',
    catchPhrase: 'Be nice to nerds. Chances are you’ll end up working for one.'
  }
];

const movies = [
  {
    title: 'The Shawshank Redemption',
    genre: 'drama',
    plot:'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
  },
  {
    title: 'The Godfather',
    genre: 'crime',
    plot:'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
  },
  {
    title: 'Pulp Fiction',
    genre: 'drama',
    plot:'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
  }
];

// Celebrity.create(celebrities, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });


Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});