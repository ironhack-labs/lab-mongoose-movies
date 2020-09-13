const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

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

const movies = [
    {
        title: 'Hackers',
        genre: 'Adventure',
        plot: 'Angelina Jolie and Johnny Lee Miller hack the planet'
    },
    {
        title: 'Terminator',
        genre: 'Sci Fi',
        plot: 'Arnie will be back'
    },
    {
        title: 'Tenet',
        genre: 'Drama',
        plot: 'Not really sure about {plot}'
    },
    {
        title: 'Dawn of the Dead',
        genre: 'Horror',
        plot: 'Web Dev Bootcamp students see their face in the mirror on Friday morning'
    },
]

Movie.create(movies)
     .then(moviesCreated => console.log('Movies included', moviesCreated))
     .catch(err => console.log('ERROR: ', err))


