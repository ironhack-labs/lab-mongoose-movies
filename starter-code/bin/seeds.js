// bin/seeds.js

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [{
    name: 'Amy Whinehouse',
    occupation: 'Singer',
    catchPhrase: 'You know I am no good'
},
{
    name: 'Jimi Hendrix',
    occupation: 'Singer',
    catchPhrase: 'Rock and Roll'
},
{
    name: 'Jamie Foxx',
    occupation: 'Actor',
    catchPhrase: 'Django'
}
]

Celebrity.create(celebrities, (err) => {
    if (err) {
      throw (err)
    }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close()
  });

// module.exports = celebrities;