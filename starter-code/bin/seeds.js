const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'library-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name : "Paolo Villaggio",
    occupation: "actor",
    catchPhrase: "catchPhrase#1"
  },
  {
    name : "Björk",
    occupation: ["actor","singer"],
    catchPhrase: "catchPhrase#2"
  },
  {
    name : "Paul Kalkbrenner",
    catchPhrase: "catchPhrase#3"
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});