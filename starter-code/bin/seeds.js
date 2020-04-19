const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity-model')

const dbName = 'Celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

const celebrities = [{
    name: 'Arnold Schwarzenneger',
    occupation: 'Actor',
    catchphrase: "I'll be back!"
    },
    {
    name: 'Lou Reed',
    occupation: 'Singer',
    catchphrase: 'Take a walk on the wild side'
    },
    {
    name: 'Bruce Campbell',
    occupation: 'Actor',
    catchphrase: 'Groovie'
    }]

Celebrity.create(celebrities)
    .then(allCelebrities => {
        console.log(`${allCelebrities.length} celebrities created on Database`)
        mongoose.connection.close()
    })

    
const Movie = require('../models/movie-model')
const dbMovie = 'Movies'
mongoose.connect(`mongodb://localhost/${dbMovie}`, { useNewUrlParser: true, useUnifiedTopology: true });

const movies = [{
        title: 'Tres son multitud',
        genre: 'Dramedia romántica',
        plot: 'Cañita Brava se reencuentra con Arnold Schwarzenneger después de 10 años. Arnold, que es en realidad un clon robótico del hombre que un día conoció Cañita, empieza a tener recuerdos borrados de un romance tórrido entre ambos. Esta situación provocará un conflicto entre Cañita y su actual pareja'
    },
    {
        title: 'Catampúm el gato',
        genre: 'Aventuras',
        plot: 'El gato Catampum debe recuperar el tesoro de los mongoles'
    }
]

 Movie.create(movies)
    .then(allMovies => {
        console.log(`${allMovies.length} movies created on Database`)
        mongoose.connection.close()
    })