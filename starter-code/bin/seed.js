const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const celebrities = [
  { name: 'jonny Bravo', occupation: 'don juan', catchPhrase: 'que pasa nena?' },
  { name: 'elon musk', occupation: 'martian', catchPhrase: 'i love elon' },

];

mongoose.connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
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
