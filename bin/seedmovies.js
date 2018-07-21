const mongoose = require('mongoose');
const Movie = require('../models/movie.js');

const dbTitle = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbTitle}`);

const movies = [
  {
    title: 'Avengers',
    genre: 'Action',
    plot: 'Maecenas ut rhoncus mi, vitae porttitor erat. Quisque sed iaculis risus. Proin lobortis augue ligula, a convallis dolor ultricies vitae.',
  },
  {
    title: 'Guardians of the Galaxy Vol. 1',
    genren: 'Action',
    plot: 'Maecenas ut rhoncus mi, vitae porttitor erat. Quisque sed iaculis risus. Proin lobortis augue ligula, a convallis dolor ultricies vitae.',
  },
  {
    title: 'Logan',
    genre: 'Action',
    plot: 'Maecenas ut rhoncus mi, vitae porttitor erat. Quisque sed iaculis risus. Proin lobortis augue ligula, a convallis dolor ultricies vitae.',
  },
];

Movie.create(movies, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${movies.length} movies.`);
  mongoose.connection.close();
});
