const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

const dbName = 'celebrityDB'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrity = [
    {
        name: 'Marlon Brando',
        occupation: 'Actor',
        catchPhrase: 'I have an offer that you cannot refuse'
    },
    {
        name: 'Tom Cruise',
        occupation: 'Actor',
        catchPhrase: 'I like action movies'
    },
    {
        name: 'Nicole Kidman',
        occupation: 'Actress',
        catchPhrase: 'I hate Tom Cruise'
    }
  ]

  Celebrity.create(celebrity, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrity.length} celebrities`)
    mongoose.connection.close()
  })




