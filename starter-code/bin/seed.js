const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
    name: "Zoey Deschanel",
    occupation: "Actress, Singer and Businesswoman",
    catchPhrase: "Just friends..."
  },
  {
    name: "Christian Bale",
    occupation: "Actor, Businessman and Productor",
    catchPhrase: "I am Batman !!!"
  },
  {
    name: "Robert Downey Jr.",
    occupation: "Actor, philanthropist and Businessman",
    catchPhrase: "Batman sucks Iron Man is better..."
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});