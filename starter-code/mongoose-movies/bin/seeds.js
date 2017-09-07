const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const {dbURL} = require('../config/db');

mongoose.connect(dbURL, {useMongoClient: true});

const celebrities = [
  {
    name: "Will Ferrell",
    occupation: "Actor",
    catchPhrase: "Stay classy San Diego"
  },
  {
    name: "Donald Trump",
    occupation: "Infuencer",
    catchPhrase: "Make America rage again"
  },
  {
    name: "Cristiano Ronaldo",
    occupation: "Philosopher",
    catchPhrase: "I know that I know nothing"
  }
];


Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(p => console.log(p.name));
  mongoose.connection.close();
});
