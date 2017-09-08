const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const {dbURL} = require('../config/db');

mongoose.connect(dbURL, {useMongoClient: true});

const celebrities = [
  {
    name       : 'Al Pacino',
    occupation : 'Actor',
    catchPhrase: 'I always tell the truth, even when I lie.',
  },

  {
    name       : 'Woody Allen',
    occupation : 'Actor, Director',
    catchPhrase: 'I love him like a brother: like Cain to Abel.',
  },

  {
    name       : 'Clint Eastwood',
    occupation : 'Actor, Director',
    catchPhrase: 'Someone left the door open and the wrong dogs came in.',
  },
]

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(p => console.log(p.name));
  mongoose.connection.close();
});
