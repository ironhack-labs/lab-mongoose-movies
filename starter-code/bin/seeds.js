const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const dbName = 'dbCelebrities';

mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Kevin Bacon',
    occupation: 'Actor',
    catchPhrase: 'I love bacon'
  }, 
  {
    name: 'Dollynho',
    occupation: 'Mascote',
    catchPhrase: 'Eu sou o Dollynho, seu amiguinho'
  },
  {
    name: 'Bolsonaro',
    occupation: 'Presidente',
    catchPhrase: 'Talkei'
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});