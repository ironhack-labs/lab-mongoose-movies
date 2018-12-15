const mongoose = require('mongoose');
const Celibrity = require('../models/celibrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celibrity = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "bla bla bla",
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "bla bla bla",
  },
  {
    name: "Daffy Duck",
    occupation: "comedian",
    catchPhrase: "bla bla bla",
  }, 
]

Celibrity.create(celibrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celibrity.length} celibrity`)
  mongoose.connection.close()
});


// const mongoose = require('mongoose');
const Movie = require('../models/movie');

// const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movie = [
  {
    title: "Matrix",
    genre: "Science-fiction",
    plot: "Bla bla bla",
  },
  {
    title: "James Bond",
    genre: "Action",
    plot: "bla bla bla",
  },
  {
    title: "Love actually",
    genre: "comedian",
    plot: "bla bla bla",
  }, 
]

Movie.create(movie, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movie.length} movie`)
  mongoose.connection.close()
});