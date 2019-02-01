const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Joao Pedro',
    occupation: 'Realist',
    catchphrase: 'Jorge did it'
  },
  {
    name: 'Jorge Silva',
    occupation: 'Computer scientist',
    catchphrase: 'No I didn\'t'
  },
  {
    name: 'Bruno Dolce',
    occupation: 'Yogi',
    catchphrase: 'It\'s an object'
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
