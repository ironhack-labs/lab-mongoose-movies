const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model')

mongoose.connect('mongodb://localhost/starter-code')

const celebrities = [
    {
        name: 'Bradley cooper',
        occupation: 'Actor',
        catchPhrase: 'If I like a song, I\'ll just keep playing it, and it nevers gets old.'
    },
    {
        name: 'Freddie Mercury',
        occupation: 'Singer',
        catchPhrase: 'I won\'t be a rock star. I will be a legend.'
    },
    {
        name: 'Salvador Dalí',
        occupation: 'Artist',
        catchPhrase: 'Surrealism is destructive, but it destroys only what it considers to be shackles limiting our vision.'
    }
]

Celebrity
    .create(celebrities)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.error(err))