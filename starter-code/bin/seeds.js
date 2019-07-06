const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect('mongodb://localhost/starter-code');

const celebrities = [
  {
    name: 'Salame Alado',
    occupation: 'Estudante',
    catchPhrase: 'Awi warabê',
  },
  {
    name: 'Mel Gibson Brasileiro',
    occupation: 'Judóca',
    catchPhrase: 'Chamanxaxão',
  },
  {
    name: 'Biru Lexton',
    occupation: 'Jogodora de futsal aquático',
    catchPhrase: 'Cêtembruxuve',
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) {
    throw(err);
  }
  console.log(`Created ${celebrities.length} movies`);
  mongoose.connection.close();
});
