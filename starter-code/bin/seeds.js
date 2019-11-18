const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');

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

mongoose.connect('mongodb://localhost:27017/' + dbName, {useNewUrlParser: true})
  .then( () => Celebrity.create(celebrities))
  .then( (insertedActors) => {
    console.log('Inserted actors: ' + insertedActors.length);
    mongoose.connection.close()})
  .catch( (err) => console.error(err));