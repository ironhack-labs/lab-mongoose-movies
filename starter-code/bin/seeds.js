const mongoose = require('mongoose');
const Movies = require('../models/movies');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: 'El ataque de las arañas',
    genre: 'Horror',
    plot: 'Arañas gigantes comen gente'
  },
  {
    title: 'El moscas de las arañas',
    genre: 'Horror',
    plot: 'Moscas gigantes comen gente'
  },
  {
    title: 'El hormigas de las arañas',
    genre: 'Horror',
    plot: 'Hormigas gigantes comen gente'
  },
]

Movies.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} celebrities`)
  mongoose.connection.close()
});







