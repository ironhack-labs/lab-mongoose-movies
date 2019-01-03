const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'String',
    occupation: 'String',
    catchPhrase: 'String',
  },
  {
    name: 'String',
    occupation: 'String',
    catchPhrase: 'String',
  },
  {
    name: 'String',
    occupation: 'String',
    catchPhrase: 'String',
  }
];

Celebrity.create(celebrities)