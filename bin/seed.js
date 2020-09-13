const mongoose = require('mongoose')
const Movie = require('../models/movie.model')


const dbtitle = 'celebs-films'
mongoose.connect(`mongodb://localhost/${dbtitle}`)


const movies = [
    {
        title: 'el sueño de Olvido',
        genre: 'comedia',
        plot: 'las aventuras de la gata Olvido'
    },

    {
        title: 'Surimi',
        genre: 'drama',
        plot: 'los dramas de Surimi la gata'
    },
    {
        title: 'Bob Esponja',
        genre: 'infantil',
        plot: 'vive en una piña debajo del mar'
    }
]

Movie.create(movies)
    .then(allMoviesCreated => console.log('Se han creado', allMoviesCreated.length, 'peliculas en la BBDD'))
    .catch(err => console.log('ERROR:', err))
