//Database

const mongoose = require('mongoose')
const dbName = 'Celebs2020'
mongoose.connect(`mongodb://localhost/${dbName}`)


//Model

const Celebrity = require('../models/celebrity.model')

//Data

const celebrities = [{
    name: "Al Pacino",
    occupation: "Actor",
    catchPhrase: "Vanity it's my favourite sin"
}, {
    name: "Robert de Niro",
    occupation: "Actor",
    catchPhrase: "Are you talkin to me?"
}, {
    name: "Christopher Nolan",
    catchPhrase: "Director",
    catchPhrase: 'No needs explanation'
}]

//Seeds
//
Celebrity.create(celebrities)
    .then(allCelebrities => {
        console.log(`Created ${allCelebrities.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Data Base error', err))


//Movie Model

const Movie = require('../models/movie.model')

//Data

const movies = [{
    title: "Memento",
    genre: "Psicological Drama",
    plot: "Begin with the end!"
}, {
    title: "Devil´s Advocate",
    genre: "Thriller",
    plot: "I never loose! I win! I win!"
}, {
    title: "Heat",
    genre: "Thriller Action",
    plot: "We assalt banks"
}]

// Seed
/*
Movie.create(movies)
    .then(allMovies => {
        console.log(`Created ${allMovies.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('DDBB error', err))