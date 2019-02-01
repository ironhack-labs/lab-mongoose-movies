const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Narcisa Um',
    occupation: 'Rica',
    catchPhrase: 'Ai que loucura'
  },
  {
    name: 'Narcisa Dois',
    occupation: 'Rica',
    catchPhrase: 'Ai que badalo'
  },
  {
    name: 'Narcisa Tres',
    occupation: 'Rica',
    catchPhrase: 'Ai que doidera',
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
