const mongoose = require('mongoose')

const dbName = 'bootcamp-lab15'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const Celebrity = require('../models/celebrity.model')

const celebrities = [
    {
        name: 'Sophie Turner',
        occupation: 'Actress',
        catchPhrase: 'And that is the tea!'
    },
    
    {
        name: 'Jimmy Fallon',
        occupation: 'Comedian',
        catchPhrase: 'I like being absurd'
    },

    {
        name: 'Ed Sheeran',
        occupation: 'Singer',
        catchPhrase: 'Everything will be okay in the end'
    }
]

mongoose.connection.collections['celebrities'].drop()

Celebrity.create(celebrities)
    .then(celebritiesCreated => console.log('Se han creado ', celebritiesCreated.length, ' celebrities en la BD'))
    .catch(err => console.log('Error! ', err))

const Movie = require('../models/movie.model')

const movies = [

    {
        title: 'Spotlight',
        genre: 'Drama',
        plot: `The film follows The Boston Globe's "Spotlight" team, the oldest continuously operating newspaper investigative journalist unit in the United States, and its investigation into cases of widespread and systemic child sex abuse in the Boston area by numerous Roman Catholic priests`
    },

    {
        title: 'The Da Vinci Code',
        genre: 'Thriller',
        plot: 'Robert Langdon, a professor of religious symbology from Harvard University, is the prime suspect in the grisly and unusual murder of Louvre curator Jacques Saunière.'
    },

    {
        title: 'Finding Nemo',
        genre: 'Animation',
        plot: `A clown fish named Marlin lives in the Great Barrier Reef and loses his son, Nemo, after he ventures into the open sea, despite his father's constant warnings about many of the ocean's dangers.`
    }

]

mongoose.connection.collections['movies'].drop()

Movie.create(movies)
    .then(moviesCreated => console.log('Se han creado ', moviesCreated.length, ' pelis en la BD'))
    .catch(err => console.log('Error! ', err))

