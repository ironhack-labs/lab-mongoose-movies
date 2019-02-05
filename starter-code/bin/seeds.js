const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const celebritiesArray = [
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Actor',
    catchPhrase: 'I’ll be back',
  },
  {
    name: 'Britney Spears',
    occupation: 'Singer',
    catchPhrase: 'The older I get the more I understand Britney’s 2007 meltdown',
  },
  {
    name: 'Justin Timberlake',
    occupation: 'Singer',
    catchPhrase: 'I’ll know when I know. And until I know, I don’t know',
  },
];

mongoose.connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
  .then(() => {
    console.log('DB conected');
    return Celebrity.create(celebritiesArray);
  }).then(() => {
    mongoose.connection.close();
  }).catch((error) => {
    console.log(error);
  });
