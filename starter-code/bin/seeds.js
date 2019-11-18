const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');
const Movie = require('./../models/Movie');

const dbName = 'holliwood';

const celebrities = [
  {
    name: "Harrison Ford",
    occupation: "Star Wars",
    catchPhrase: "Hola"
  },
  {
    name: "Samuel L Jackson",
    occupation: "Avengers",
    catchPhrase: "Hola y adios"
  },
  {
    name: "Julia Rovers",
    occupation: "Ocenas",
    catchPhrase: "Hola y eso"
  }
];
const movies = [{
  title: 'Star Wars',
  genre: 'Science Fiction',
  plot: 'The Force'
},{
  title: 'Empire Strikes Back',
  genre: 'Science Fiction',
  plot: 'The Force'
},{
  title: 'The Return of the Jedi',
  genre: 'Science Fiction',
  plot: 'The Force'
}];


mongoose.connect('mongodb://localhost:27017/' + dbName, {useNewUrlParser: true})
  .then( () => Celebrity.create(celebrities))
  .then( (insertedActors) => {
    console.log('Inserted actors: ' + insertedActors.length)})
  .then( () => Movie.create(movies))
  .then( (insertedMovies) => {
    console.log('Inserted movies: ' + insertedMovies.length);
    mongoose.connection.close();
  })
  .catch( (err) => console.error(err));