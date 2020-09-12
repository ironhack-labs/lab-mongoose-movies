const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model')

const dbName = 'celebDB'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const celebrities = [
    {
        name : 'Christian Bale',
        occupation : 'actor',
        catchphrase : "I'm Batman"
    },

    {
        name : 'FKA Twigs',
        occupation : 'singer',
        catchphrase : 'Que me quiten lo bailao' 
    },

    {
        name : 'Angelina Jolie',
        occupation : 'actor',
        catchphrase : 'Hack the Planet!'
    },

    {
        name : 'Froilan de Todos los Santos',
        occupation : 'oxigen waste',
        catchphrase : 'Voy un poco Lindsay Lohan'
    }
]

Celebrity.create(celebrities)
    .then(allCelebsCreated => console.log('Celebrities added', allCelebsCreated))
    .catch(err => console.log('ERROR: ', err))