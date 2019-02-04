const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchphrase: 'Show me the money'
  },
  {
    name: 'Yami Yugi',
    occupation: 'Duelist',
    catchphrase: 'It\'s time to duel!'
  },
  {
    name: 'Scorpion Hellfire',
    occupation: 'Kombatant',
    catchphrase: 'Get over here!'
  }
];

const movies = [
  {
    title: 'Diehard',
    genre: 'Action',
    plot: 'Terrorists take over the Nakatomi Building'
  },
  {
    title: 'Vanilla Sky',
    genre: 'Drama',
    plot: 'Good question'
  },
  {
    title: 'Tangled',
    genre: 'Animation',
    plot: 'Pan-fencing'
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrities.length} celebrities`);
});

Movie.create(movies, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
