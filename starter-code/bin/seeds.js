require('dotenv').config();

const mongoose  = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie     = require('../models/movie');

// mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
mongoose.connect(`mongodb://localhost/lab-mongoose-movies`);

const celebrities = [
  {
    name: 'Rodrigo Rato',
    catchPhrase: '¡Es el mercado amigo!'
  },
  {
    name: 'M. Rajoy',
    occupation: 'Politic',
    catchPhrase: '¿Y la europea?'
  },
  {
    name: 'Cristina Cifuentes',
    occupation: 'Student',
    catchPhrase: 'No me voy, me quedo.'
  }
]

Celebrity.collection.drop()

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useMongoClient: true});

const movies = [
  {
    title: 'Caso canal',
    genre: 'Drama',
    plot: ''
  },
  {
    title: 'Caso punica',
    genre: 'Drama',
    plot: ''
  },
  {
    title: 'Caso gurtel',
    genre: 'Drama',
    plot: ''
  }
]

Movie.collection.drop()

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});
