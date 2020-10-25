const mongoose = require('mongoose')

const dbName = 'bootcamp-modulo2'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const Celebrity = require('../models/celebrity.model')


// Iteracion 1 crear array de 3 objetos con name, ocupation y catchphrase. Exportar


const celebrities = [
    {
        name: 'Stanley Kubrick',
        occupation: 'Director',
        catchPhrase: 'The best ever'
    },

    {
        name: 'Arnold ',
        occupation: 'Actor',
        catchPhrase: 'Ill be back'
    },

    {
        name: 'Michael Jackson',
        occupation: 'Singer',
        catchPhrase: 'Billie Jean'
    }
]

mongoose.connection.collections['celebrities'].drop()

Celebrity.create(celebrities)
    .then(celebritiesCreated => console.log( celebritiesCreated.length, ' created in the DB'))
    .catch(err => console.log('Error! ', err))

const Movie = require('../models/movie.model')

const movies = [

    {
        title: 'Alien el Octavo Pasajero',
        genre: 'Thriller',
        plot: `The film follows The Boston Globe's "Spotlight" team, the oldest continuously operating newspaper investigative journalist unit in the United States, and its investigation into cases of widespread and systemic child sex abuse in the Boston area by numerous Roman Catholic priests`
    },

    {
        title: 'Senderos de Gloria',
        genre: 'Drama',
        plot: ''
    },

    {
        title: 'Conan el Barbaro',
        genre: 'Aventuras',
        plot: `Crush your enemies, see them driven before you, and hear the lamentation of the women!`
    }

]

mongoose.connection.collections['movies'].drop()

Movie.create(movies)
    .then(moviesCreated => console.log(moviesCreated.length, ' created in the DB'))
    .catch(err => console.log('Error! ', err))