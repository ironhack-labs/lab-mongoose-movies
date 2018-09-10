const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrity-application';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Evgeni Malkin',
    occupation: "Hockey Player",
    catchphrase: "I am Score",
    },
  {
    name: "Johnny Hammer",
    occupation: "Reality TV Star",
    catchphrase: "Stop! Screwdriver Time!",
  },
  {
    name: "Reptar",
    occupation: "Dinosaur",
    catchphrase: "There's Kids On the Ice!",
  },

]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} stars`)
  mongoose.connection.close()
});