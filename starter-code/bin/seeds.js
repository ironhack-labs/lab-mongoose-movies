const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
  const {dbURL} = require('../config/db');

mongoose.connect(dbURL, {useMongoClient: true});

const celebs = [
  {
    name: 'Levar Burton',
    occupation: 'Actor',
    catchphrase: "But don't take it from me..."
  },
  {
    name: 'Kanye West',
    occupation: 'Musician',
    catchphrase: "You ain't got the answers!"
  },
  {
    name: 'Muhammad Ali',
    occupation: 'Boxer',
    catchphrase: "I'm so ill I make medicine sick!"
  },
]

Celebrity.create(celebs, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(c => console.log(c.name));
  mongoose.connection.close();
});
