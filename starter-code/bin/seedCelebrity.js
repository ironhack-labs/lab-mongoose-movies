const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Rick James",
    occupation: "Singer",
    catchPhrase: "I'm Rick James, bitch"
  },
  {
    name: "Michael Jackson",
    occupation: "Singer",
    catchPhrase: "Hee-hee"
  },
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "I'm fuckin insane"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} books`)
  mongoose.connection.close();
});
