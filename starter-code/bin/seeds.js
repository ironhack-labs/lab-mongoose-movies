const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

const arrCeleb = [
  {
    name: "The Soup Nazi",
    occupation: "Chef",
    catchPhrase: "No soup for you!"
  },
  {
    name: "Fox Mulder",
    occupation: "Detective",
    catchPhrase: "The truth is out there"
  },
  {
    name: "Elaine Benes",
    occupation: "Editor",
    catchPhrase: "Yada, yada, yada"
  }
];

Celebrity.create(arrCeleb, (err) => {
  if (err) {throw(err) }
  console.log(`There are ${arrCeleb.length} new celebrities in town!`)
  mongoose.connection.close();
})
