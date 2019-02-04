const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

console.log(Celebrity);

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Top gun',
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    catchPhrase: 'wow',
  },
  {
    name: 'Daffy Duck',
    occupation: 'Comedian',
    catchPhrase: 'hahaha',
  },
];

console.log(celebrities);

mongoose.connect('mongodb://localhost:27017/mongoose-movies', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Celebrity.create(celebrities);
  })
  .then((data) => {
    console.log('Created initial celebrity', data);
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
