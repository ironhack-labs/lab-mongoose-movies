const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Edward Norton",
    occupation: "Actor",
    catchPhrase: "Bite the curb",
  },
  {
    name: "Clint Eastwood",
    occupation: "Actor",
    catchPhrase: "Do you feel lucky punk?",
  },
  {
    name: "Dwayne Johnson",
    occupation: "Actor",
    catchPhrase: "Do you smell what the Rock is cooking?",
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});

