const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'Crud-Lab';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: `Alex Rodriguez`,
    occupation: `Baseball Player`,
    catchPhrase: `I hit homeruns!`
  },
  {
    name: `Michael Jordan`,
    occupation: `Basketball Player`,
    catchPhrase: `Talent wins games, but teamwork and intelligence wins championships.`
  },
  {
    name: `Dwayne Johnson (The Rock)`,
    occupation: `Actor`,
    catchPhrase: `Can you smell what the rock is cooking?`
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});

