const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js')

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrityArray = [
  {
    name: "Lebron James",
    occupation: "playing basketball",
    catchPhrase: "catchprase 1"
  },
  {
    name: "Scottie Pippen",
    occupation: "playing basketball",
    catchPhrase: "catchprase 2"
  },
  {
    name: "Michael Jordan",
    occupation: "playing basketball",
    catchPhrase: "catchphrase 3"
  }
]

Celebrity.create(celebrityArray, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrityArray.length} celebrities`)
  mongoose.connection.close();
});