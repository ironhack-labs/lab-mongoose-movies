const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'my-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Sylwia Poplawska",
    occupation: "actor",
    catchPhrase: "I want to be Marilyn Monroe of 21th century"
    },
  {
    name: "Monika Szadkowska",
    occupation: "kite surfer",
    catchPhrase: "Zycie jest jak rower "    
  },
  {
    name: "Brodka ",
    occupation: "singer",
    catchPhrase: "Lubie lato w Varsovie"  
  }  
]

Celebrity.collection.drop();

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});