const mongoose = require('mongoose')
const dbName =  'celebritydb'

mongoose.connect(`mongodb://localhost/${dbName}`)

// const Celebrity = require('../models/celebrity')

// const celebrities = [
//     {
//         name: "Russell Crowe",
//         occupation: "actor",
//         catchPhrase: "I have to believe that when things are bad I can change them."
//     }, 
//     {
//         name: "Robert de Niro",
//         occupation: "actor",
//         catchPhrase: "You talkin’ to me?"

//     }, 
//     {
//         name: "Al Pacino",
//         occupation: "actor",
//         catchPhrase: "Don’t tell me you’re innocent. Because it insults my intelligence and makes me very angry."
//     }
// ]

// Celebrity.create(celebrities)

//     .then(allTheCelebrities => {
//         console.log(`Created ${allTheCelebrities.length} celebrities`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('There was an error creating the celebrities', err))


// Movies:

const Movie = require('../models/movie')

const movies = [
    {
        title: "Cinderella Man",
        genre: "drama",
        plot: "The story of James J. Braddock, a supposedly washed-up boxer who came back to become a champion and an inspiration in the 1930s. "
    }, 
    {
        title: "Gran Torino",
        genre: "drama",
        plot: " Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino"

    }, 
    {
        title: "Legends of the Fall",
        genre: "drama",
        plot: "In the early 1900s, three brothers and their father living in the remote wilderness of Montana are affected by betrayal, history, love, nature, and war. "
    }
]

Movie.create(movies)

    .then(allTheMovies => {
        console.log(`Created ${allTheMovies.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the movies', err))