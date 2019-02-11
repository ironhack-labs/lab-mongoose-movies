const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const celebrities = [
  { name: 'James Bond', occupation: 'Secret Agent', catchPhrase: 'Mixed, not shaked' },
  { name: 'Darth Vader', occupation: 'Imperial CEO', catchPhrase: 'I am your father' },
  { name: 'Austin Powers', occupation: 'Fuckin Lover', catchPhrase: 'Yesss, baby, yesss!' },
];

mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true })
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
