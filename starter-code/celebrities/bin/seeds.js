const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'localCelebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Julian",
    occupation: "entrepreneur",
    catchPhrase: "tecnología"
  },
  {
    name: "BliSs",
    occupation: "teacher",
    catchPhrase: "BliSs"
  },
  {
    name: "Diego",
    occupation: "TA",
    catchPhrase: "javascript no te espera"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} local celebrities`)
  mongoose.connection.close()
});