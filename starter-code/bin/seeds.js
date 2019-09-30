const mongoose = require('mongoose');
//const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

/*
const celebrities = [
  {
    name: 'Kanye West',
    occupation: 'Artist',
    catchPhrase: 'I miss the old Kanye'
  },
  {
    name: 'Cristiano Ronaldo',
    occupation: 'Football Player',
    catchPhrase: 'SIIIIUUUUUU'
  },
  {
    name: 'Denzel Washington',
    occupation: 'Actor',
    catchPhrase: 'My nigga'
  }
];

Celebrity.create(celebrities, err => {
  if (err) { throw(err) };
  console.log(`Created ${celebrities.length} movies.`)
  mongoose.connection.close()
});
*/

const movies = [
  {
    title: 'Kanye West Experience',
    genre: 'Musical',
    plot: "Kanye West goes on a rant about how he's the best artist there's ever been"
  },
  {
    title: 'Goal III',
    genre: 'Drama',
    plot: 'A story about a young boy from Portugal and his ascent to football stardom'
  },
  {
    title: 'Training Day',
    genre: 'Drama',
    plot: 'A new officer starts his training with a seasoned detective'
  }
];

Movie.create(movies, err => {
  if (err) { throw(err) };
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});