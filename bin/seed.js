const mongoose = require('mongoose')
const dbName = 'mongoose-celebrities-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const Celebrity = require('../models/celebrity.model')
const Movie = require('./../models/movie.model')

Celebrity.collection.drop()
Movie.collection.drop()

const celebrities = [
    {
        name: 'Abel Makkonen Tesfaye',
        occupation: 'singer',
        catchPhrase: 'Im blinded by the lights'
    },
    {
        name: 'Arnold Alois Schwarzenegger',
        occupation: 'actor',
        catchPhrase: 'Sayonara, Baby'
    },
    {
        name: 'Adam Sandler',
        occupation: 'comedian',
        catchPhrase: 'Not in the balls!'
    }
]

const movies = [
    {
        title: 'Alita, Battle Angel',
        genre: 'action, sci-fi',
        plot: 'A deactivated cyborg is revived, but cannot remember anything of her past life and goes on a quest to find out who she is.'
    },
    {
        title: 'Avengers: Infinity War',
        genre: 'action, sci-fi',
        plot: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
    },
    {
        title: 'Tron: Legacy',
        genre: 'action, sci-fi',
        plot: 'The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his father`s corrupted creation and a unique ally who was born inside the digital world.'
    },
]

Celebrity
    .create(celebrities)
    .then(allCelebrities => {
        console.log(`Created ${allCelebrities.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error creating the Celebrity DB: ', err))

Movie
    .create(movies)
    .then(allMovies => {
        console.log(`Created ${allMovies.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error creating the Movie DB: ', err))