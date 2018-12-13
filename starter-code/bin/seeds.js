const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Jul",
    occupation: "Singer",
    catchPhrase: "Levage en moto, kalash dans l'auto",
  },
  {
    name: "Booba",
    occupation: "Singer",
    catchPhrase: "O.P j'suis dans le coin V.I.P du coin V.I.P",
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "There’s no reason to have a plan B because it distracts from plan A.",
  },
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});