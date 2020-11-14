const mongoose = require('mongoose');
const Celebrities = require('../models/celebrities.model');

const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: " Mark Hamill",
    occupation: "Actor",
    catchPhrase: "May the force be with you",
  },
  {
    name: "James Dean",
    occupation: "Actor",
    catchPhrase: "Dreams as if you will live forever; Live as if you will die today",
  },
  {
    name: "RuPaul",
    occupation: "Superstar",
    catchPhrase: "Sashay, away!",
  },
]

Celebrities
  .create(celebrities)
  .then(celebritiesBase => {
    console.log(`Created ${celebritiesBase.length} celebrities`)
    mongoose.connection.close();
  })
  .catch(err => console.log('Hubo un error,', err))