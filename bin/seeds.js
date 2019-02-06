const mongoose = require('mongoose');
const Celebrity = require('../model/celebrity');

const celebrities = [
  { name: 'Tom Cruise', occupation: 'actor', catchPhrase: 'hola que tal' },
  { name: 'Terminator', occupation: 'Human Lover', catchPhrase: 'hasta la vista baby' },
  { name: 'Mario bros', occupation: 'plumber', catchPhrase: 'itsaaa meeee maaaario' },
];

mongoose.connect('mongodb://localhost:27017/celebrities', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Celebrity.create(celebrities);
  }).then((data) => {
    console.log('created data', data);
  }).then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
