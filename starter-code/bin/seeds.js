const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: 'Dona Flor e seus dois maridos',
    genre: 'Comedia',
    plot: 'hakjsdkjahsdkaj',
  },
  {
    title: 'Exterminador do Futuro',
    genre: 'Action',
    plot: 'a;sldm; alskdmlkmsad lkamslkmd laks',
  },
  {
    title: 'Star Wars',
    genre: 'Action',
    plot: 'Geday lslkdflk lsdkflksd flkslkdf',
  },
];

Movie.create(movies, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
