const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const {dbURL} = require('../config/db');

mongoose.connect(dbURL, {useMongoClient: true});

const celebrities = [
  {
    name: 'Tom cruise',
    occupation: 'Actor',
    catchPhrase: 'Nothing to say'
  },
  {
    name: 'Quentin Tarantino',
    occupation: 'Director',
    catchPhrase: 'Say what again!'
  },
  {
    name: 'Leonardo Dicarpio',
    occupation: 'Actor',
    catchPhrase: 'I am the king of the world'
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) throw err
  docs.forEach( (e) => {
    console.log( e )
  })
  mongoose.connection.close();
})
