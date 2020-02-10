const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrities')

const dbName = 'celebrities-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'Get with it.'
  },
  {
    name: 'Brandon Sanderson',
    occupation: 'writer',
    catchPhrase: 'The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.'
  },
  {
    name: 'Daniela Andrade',
    occupation: 'singer',
    catchPhrase: 'Stare at each other and fall in love.'
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connections.close()
})