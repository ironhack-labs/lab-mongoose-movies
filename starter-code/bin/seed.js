const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dbName = 'celebrities-db'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

const celebrities = [
  {
    name: 'Lebron James',
    occupation: 'basketball player',
    catchPhrase: 'I am the king'
  },
  {
    name: 'Will Smith',
    occupation: 'actor',
    catchPhrase: "Let's do this"
  },
  {
    name: 'George R Martin',
    occupation: 'writer',
    catchPhrase: 'Winter is coming'
  }
]

Celebrity.create(celebrities)
  .then(() => console.log(`Created ${celebrities.length} celebrities`))
  .catch(err => console.log(`There was an error:`, err))
