const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const {dbURL} = require('../config/db')

mongoose.connect(dbURL, {useMongoClient: true});

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'Tom Cruise Phrase'
  },
  {
    name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: 'Beyonce Phrase'
  },
  {
    name: 'Daffy Duck',
    occupation: 'comedian',
    catchPhrase: 'Daffy Duck Phrase'
  }
]

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err
  }
  docs.forEach(c => console.log(c.name));
  mongoose.connection.close()
})
