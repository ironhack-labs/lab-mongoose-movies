// Iteration #1
const mongoose = require('mongoose')

const Celebrity = require('../models/celebrity')

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/celebrities', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
})

const celebrities = [
  {
    name: 'Mr. X',
    occupation: 'Actor',
    catchPhrase: 'Xaplamps'
  },
  {
    name: 'Rick Sanchez',
    occupation: 'Genius Scientist',
    catchPhrase: 'Wubba Lubba Dub Dub'
  },
  {
    name: 'Lord Puigdemoney',
    occupation: 'Awesome Lider',
    catchPhrase: 'Ola ke ase?'
  }
]

Celebrity.create(celebrities, (err, data) => {
  if (err) {
    throw err
  }
  console.log('Data Stored correctly')
  mongoose.connection.close()
})
