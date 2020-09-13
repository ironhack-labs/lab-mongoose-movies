const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')


const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const celebrities = [
    {
        name: 'Fat Mike',
        occupation: 'Singer',
        catchPhrase: 'Gimme the bottle'
    },
    {
        name: 'Brad Pitt',
        occupation: 'Actor',
        catchPhrase: 'pretty face'
    },
    {
        name: 'Pamela Anderson',
        occupation: 'Baywatch',
        catchPhrase: 'Plastic boobs!'
    }
]



Celebrity.create(celebrities)
    .then(allCelebrities => console.log('Se han creado', allCelebrities.length))
    .catch(err => console.log('ERROR: ', err))

// const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

// const dbName = 'mongoose-movies';
// mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })


const movies = [
    {
        title: 'Lo que el viento se llevo',
        genre: 'comedy',
        plot: 'En un lugar de la Mancha.....'

    }, {

        title: 'Cantinflas',
        genre: 'drama',
        plot: 'De un tio graciosete.....'
    },
    {

        title: 'Star Wars',
        genre: 'thriller',
        plot: 'Uno que dice soy tu padre.....'
    }]

Movie.create(movies)
    .then(allMovies => console.log('Se han creado', allMovies.length))
    .catch(err => console.log('ERROR: ', err))