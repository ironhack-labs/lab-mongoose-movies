const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Michael Jackson',
    occupation: 'Singer',
    catchPhrase: 'Thriller!'
  },
  {
    name: 'Michael Jordan',
    occupation: 'NBA Star',
    catchPhrase: 'Space Jam saves my life',
  },
  {
    name: 'Eminem',
    occupation: 'Singer',
    catchPhrase: 'Im rich thanks to 8 mille',
  },
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});