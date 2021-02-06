const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

const dbName = 'celebrities&movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

Celebrity.collection.drop()
Movie.collection.drop()

const celebrities = [
  {
    name: 'Jason Statham',
    occupation: 'Actor',
    catchPhrase: 'if you re going to do something, do it with style!'
  },
  {
    name: 'Berto Romero',
    occupation: 'Comedian',
    catchPhrase: 'samante'
  },
  {
    name: 'Macarena Garcia',
    occupation: 'Actriz',
    catchPhrase: 'Cuida lo que amas, porque los recuerdos no se pueden abrazar'
  }

];

const movies = [
  {
    title: 'Snatch',
    genre: 'comedy',
    plot: 'Gypsys, fight and diamonds'
  },
  {
    title: 'Untochable',
    genre: 'comedy',
    plot: 'French people doing french things'
  },
  {
    title: 'Adu',
    genre: 'drama',
    plot: 'the story of a kid´s journey from Africa to Europe'
  }

];


Celebrity
  .create(celebrities)
  .then(allCelebritiesCreated => {
    console.log(`Created ${allCelebritiesCreated.length} celebs`)
    mongoose.connection.close();
  })
  .catch(err => console.log('Hubo un error,', err))

Movie
  .create(movies)
  .then(allMoviesCreated => {
    console.log(`Created ${allMoviesCreated.length} movies`)
    mongoose.connection.close();
  })
  .catch(err => console.log('Hubo un error,', err))