const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "surf",
    catchPhrase: "See you on monday"
  }, 
  {
    name: "Arnold Scwaznegger",
    occupation: "bodyBilder",
    catchPhrase: "Hasta la vista baby",
  },
  {
    name: "Maddona",
    occupation: "Dance",
    catchPhrase: "Like a virgin",
  }
]
   

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrity`)
  mongoose.connection.close();
});