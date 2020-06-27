
const mongoose = require('mongoose')
const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

// //Model

// const Celebrity = require('../models/Celebrity.model')

// //Data

// const celebrities = [
//     {
//         name: "Brad Pitt",
//         occupation: "Actor",
//         catchPhrase: "It's only after we've lost everything that we're free to do anything."
//     },
//     {
//         name: "Aloe Blacc",
//         occupation: "Singer",
//         catchPhrase: "I need a dollar."
//     },
//     {
//         name: "George RR Martin",
//         occupation: "Writer",
//         catchPhrase: "Winter is coming."
//     },
// ]

// //Seed

// Celebrity.create(celebrities)
//     .then(allTheCelebrities => {
//         console.log(`Created ${allTheCelebrities.length} celebrities`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('There was an error creating the celebrities', err))


//Model

const Movie = require('../models/Movie.model')

//Data

const movies = [
    {
        title: "Fight Club",
        genre: "Drama, Thriller",
        plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
    },
    {
        title: "Pulp Fiction",
        genre: "Crime, Drama",
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        title: "Interstellar",
        genre: "Adventure, Drama, Sci-Fi",
        plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
]

//Seed

Movie.create(movies)
    .then(allTheMovies => {
        console.log(`Created ${allTheMovies.length} movies`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the movies', err))