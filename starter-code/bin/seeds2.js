// bin/seeds2.js

const mongoose = require('mongoose');
const Movie = require('../models/movie');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
    {
        title: "Terminating Beethoven",
        genre: "Action",
        plot: "In 1807 the world is at war for Europe. But one musician must fight for the world's destiny!"
    },
    {
        title: "Fly like an Eagle",
        genre: "Biopic",
        plot: "Fly with Air Jordan through his life, his successes, his darkest moments and see him from child to legend"
    },
    {
        title: "Hulk in time",
        genre: "Peplum",
        plot: "Hulk has been sent across oceans of time, lost, could his salvations lie in Marcus Aurelius teachings?"
    }
];

Movie.create(movies, err => {
    if (err) {
        throw err;
      }
      console.log(`Created ${movies.length} movies`);
      mongoose.connection.close();
});