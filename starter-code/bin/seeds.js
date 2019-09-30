const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Kanye West',
    occupation: 'Artist',
    catchPhrase: 'I miss the old Kanye'
  },
  {
    name: 'Cristiano Ronaldo',
    occupation: 'Football Player',
    catchPhrase: 'SIIIIUUUUUU'
  },
  {
    name: 'Denzel Washington',
    occupation: 'Actor',
    catchPhrase: 'My nigga'
  }
];

Celebrity.create(celebrities, err => {
  if (err) { throw(err) };
  console.log(`Created ${celebrities.length} movies.`)
  mongoose.connection.close()
});