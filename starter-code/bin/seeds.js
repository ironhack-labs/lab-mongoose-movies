
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

celebrities = [
  {name: "Brad Pitt",
  occupation: "Actor",
  catchPhrase: "I'm one of those people you hate because of genetics. It's the truth."}
  ,
  {name: "Scarlett Johansson",
  occupation: " Actress | Singer",
  catchPhrase: "If you feel glamorous, you definitely look glamorous",}
  ,
  {name: "Mark Hamill",
  occupation: "Actor | Producer | Soundtrack",
  catchPhrase: "I have failed 'Star Wars' trivia tests. People come up to me at conventions and use terms that I've never heard of",
      }
]
Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} movies`)
  mongoose.connection.close();
});