const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose-movies');
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: '',
  },
  {
    name: 'Tom Hanks',
    occupation: 'actor',
    catchPhrase: '',
  },
  {
    name: 'Tom Hardy',
    occupation: 'actor',
    catchPhrase: '',
  },
  {
    name: 'Britney Spears',
    occupation: 'singer',
    catchPhrase: '',
  },
  {
    name: 'Shakira Mebarak',
    occupation: '',
    catchPhrase: '',
  },
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(celebrity => {
    console.log(celebrity.name)
  });
  mongoose.connection.close();
});
