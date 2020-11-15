const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model')

const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebs = [
    {
        name: "sadam jesus",
        occupation: "preacher",
        catchPhrase: "gotta catch em all"
    },
    {
        name: "Thomas Shelby",
        occupation: "mayor of Burningham",
        catchPhrase: "pewpew"
    },
    {
        name: "Marie-Raymond",
        occupation: "sleep",
        catchPhrase: "saky sakyy"
    }
]

Celebrity 
    .create(celebs)
    .then(allCelebsCreated => {
        console.log(`Created ${allCelebsCreated.length} celebrities!`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error: ', err))


    const movies = [
        {
            name: "matrix",
            genre: "action",
            plot: "crazy people"
        },
        {
            name: "simpsons",
            genre: "fiction",
            plot: "regular life"
        },
        {
            name: "family guy",
            genre: "comedy",
            plot: "american dream"
        }
    ]
    
    Movie 
        .create(movies)
        .then(allMoviesCreated => {
            console.log(`Created ${allMoviesCreated.length} movies!`)
            mongoose.connection.close();
        })
        .catch(err => console.log('Hubo un error: ', err))