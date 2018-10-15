const mongoose = require('mongoose');
const Celebrity = require('../models/celebmodel');

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

mongoose.connect('mongodb://localhost/celebritiesdb')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

Celebrity.insertMany(celebrities)
  .then(result => {
    console.log(result);
    mongoose.connection.close;
  }).catch(err => {
    console.error(err);
  });