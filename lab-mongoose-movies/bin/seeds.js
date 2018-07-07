const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
    name: 'Gollum',
    occupation: 'Hobbit',
    catchPhrase: 'My Precios'
  },
  {
    name: 'Darth Vader',
    occupation: 'Singer',
    catchPhrase: `I'm your father`
  },
  {
    name: 'Pikachu',
    occupation: 'Actor',
    catchPhrase: 'Pi-ka-chuuu!'
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} movies`)
  mongoose.connection.close()
});