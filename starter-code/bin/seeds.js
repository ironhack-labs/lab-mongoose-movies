const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrity';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
  {
    name: "Julia Roberts",
    ocupation: "actress",
    catchPhrase: "Mujer bonita"
  },
  {
    name: "Brad Pit",
    ocupation: "actor",
    catchPhrase: "El club de la pelea"
  },
  {
    name: "Tomy Lee Jones",
    ocupation: "actor",
    catchPhrase: "Hombres de negro"
  }
]

Celebrity.create(celebrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrity.length} celebrities`)
  mongoose.connection.close()
});
