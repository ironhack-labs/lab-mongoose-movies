const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Arnold Schwarzenegger",
    occupation: "Terminator",
    catchPhrase: "I'll be back!"
  },
  {
    name: "Sylvester Stallone",
    occupation: "Boxer",
    catchPhrase: "Aaaadriaaaan!"
  },
  {
    name: "Marlon Brando",
    occupation: "Godfather",
    catchPhrase: "I'll make him an offer he can't refuse."
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});