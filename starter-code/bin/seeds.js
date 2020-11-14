const mongoose = require('mongoose')
const Celebrity = require('../models/celeb.model')

const dbName = 'MoviesCRUDLab'

mongoose.connect(`mongodb://localhost/${dbName}`)


const celebrities = [
  {
    name: 'Kris Jenner',
    occupation: 'momager',
    catchPhrase: 'You\'re doing amazing sweetie'
  },
  {
    name: 'Bugs Bunny',
    occupation: 'actor',
    catchPhrase: 'What\'s up doc?'
  },
  {
    name: 'Beyoncé',
    occupation: 'queenB',
    catchPhrase: 'I woke up like this'
  }
]


Celebrity
  .create(celebrities)
  .then(data => {
    console.log('Data included into database', data.length)
    mongoose.connection.close()
  })
  .catch(err => console.log('There was an error', err))