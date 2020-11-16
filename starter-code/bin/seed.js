const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')


const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)


const celebrities = [
  {
    name: 'Terminator',
    occupation: 'Machine',
    catchPhrase: "I'll be back",
  },
  {
    name: 'Danny Glover',
    occupation: 'Actor',
    catchPhrase: "I'm getting too old for this",
  },
  {
    name: 'James Bond',
    occupation: 'Special Agent',
    catchPhrase: "The name is Bond, James Bond",
  },
]


Celebrity
  .create(celebrities)
  .then(allCelebrities => {
    console.log(`Se han creado ${allCelebrities.length} celebrities`)
    mongoose.connection.close()
  })
  .catch(err => console.log('Hubo un error,', err))


