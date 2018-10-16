const mongoose = require('mongoose');
const Celebrity = require('../models/celebmodel');
const Movie = require('../models/moviemodel');

const celebrities = [
  {
    name: "Mariah Carey",
    occupation: "Singer, songwriter and producer",
    catchPhrase: "I don't know her",
  },
  {
    name: "Britney Spears",
    occupation: "Bipolar crazy lipsinger",
    catchPhrase: "Baby one more time",
  },
  {
    name: "Fari Escobar",
    occupation: "Lemon eater and singer",
    catchPhrase: "Torito bravo en el carro robado",
  },
  {
    name: "Daddy Punky",
    occupation: "Ladrón de canciones",
    catchPhrase: "Me robo la gasolina",
  }
]

const movies = [
  {
    title: "El amor tiene 50 metros de alto",
    genre: "Romance",
    plot: "Un profesor de informática conoce a Godzilla y se da cuenta de que las apariencias no importan.",
  },
  {
    title: "Conociendo al enemigo",
    genre: "Acción",
    plot: "Una chica se ve cara a cara con su mayor enemigo, el CSS, pero ella es más fuerte de lo que cree."
  },
  {
    title: "Aquí huele a muerto",
    genre: "Psycho thriller",
    plot: "Una clase juega a un juego inocente y alguien termina muerto de verdad."
  },
]

mongoose.connect('mongodb://localhost/celebritiesdb')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

/*Celebrity.insertMany(celebrities)
  .then(result => {
    console.log(result);
    mongoose.connection.close;
  }).catch(err => {
    console.error(err);
  });*/

  Movie.insertMany(movies)
  .then(result => {
    console.log('inserted!');
    mongoose.connection.close;
  })
  .catch(error => {
    console.log(error);
  })