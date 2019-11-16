const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
//const Author = require('../models/author.model');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);
Celebrity.collection.drop();
//Author.collection.drop();

const celebrity = [{
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "la frase de will",
  },
  {
    name: "Shakira",
    occupation: "Cantante",
    catchPhrase: "la frase de shakira",
  },
  {
    name: "Fernando Torres",
    occupation: "Futbolista",
    catchPhrase: "la frase de fernando",
  }
]

Celebrity.create(celebrity, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${celebrity.length} celebryties`)
  mongoose.connection.close();
});