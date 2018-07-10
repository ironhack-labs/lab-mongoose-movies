const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
    {
        title:  'Titanic',
        genre:  'Drama',
        plot: 'Se hunde un barco'
    },
    {
        title:  'Matrix',
        genre:  'Acción',
        plot: 'Entran a la matrix'
    },
    {
        title:  'Misión imposible',
        genre:  'Acción',
        plot: 'Hacen una misión imposible'
    }
];

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});