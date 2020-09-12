const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')

// Define DB
const dbName = 'lab-mongoose-movies'

// Connect to DB
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const celebrities = [
    {
        name: 'Chadwick Boseman',
        occupation: 'Actor',
        catchPhrase: 'Wakanda Forever!'
    },
    {
        name: 'Chris Evans',
        occupation: 'Actor',
        catchPhrase: 'I am Captain America'
    },
    {
        name: 'Jessica Alba',
        occupation: 'Actress',
        catchPhrase: 'When I do comedy, I lose all inhibition and introspection. I no longer care.'
    }
]

Celebrity.create(celebrities)
    .then(celebritiesCreated => console.log('Se han creado', celebritiesCreated.length, 'celebridades en la base de datos'))
    .catch(err => console.log('Ha habido un error creando las celebridades:', err))
