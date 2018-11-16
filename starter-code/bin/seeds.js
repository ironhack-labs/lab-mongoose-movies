const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
mongoose.connect(`mongodb://localhost/celebrities`);

const celebrities = [
  {
    name: "celebrity1",
    occupation: "Actor1",
    catchPhrase: "Phrase1"
  },
  {
    name: "celebrity2",
    occupation: "Actor2",
    catchPhrase: "Phrase2"
  },
  {
    name: "celebrity3",
    occupation: "Actor3",
    catchPhrase: "Phrase3"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});