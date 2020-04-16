const mongoose = require('mongoose');
const Movies = require('../models/movies');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let movies =[
  {
    title: "Angela Merkel in Berlin",
    genre: "Romance",
    plot: "Angela finds the love of her life in Berlin",
  },
  {
    title: "Titanic",
    genre: "Drama",
    plot: "Angela finds the love of her life in the ocean",
  },
  {
    title: "Merkel the great politician",
    genre: "Documentary",
    plot: "Angela finds the love of her life doing politics",
  }
]

Movies.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} books`);
  mongoose.connection.close();
});

