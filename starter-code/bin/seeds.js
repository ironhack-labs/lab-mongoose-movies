const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
  {
    name: 'Brie Larson',
    occupation: 'actress',
    catchPhrase: `I'm Capitan Marvel`
  },
  {
    name: 'Robert Downey Jr',
    occupation: 'actor',
    catchPhrase: `Jarvis, sometimes you gotta run before you can walk` 
  },
  {
    name: 'Chris Evans',
    occupation: 'actor',
    catchPhrase: `Doesn't matter what the press says` 
  }
]

Celebrity.create(celebrities, (err) => {
  if(err) {throw (err)}
  console.log(`You created ${celebrities.length} celebrities!`)
  mongoose.connection.close()
})