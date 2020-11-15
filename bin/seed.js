const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrities.model')

// const dbName = 'celebritiesdb'
// mongoose.connect(`mongodb://localhost/${dbName}`)

// const celebrities = [
//     {
//         name: "Brad Pitt",
//         occupation: "Actor",
//         catchPhrase: "I've been no stranger to change.",
//     },
//     {
//         name: "Samuel L Jackson",
//         occupation: "Actor",
//         catchPhrase: "And You Will Know My Name Is The Lord When I Lay My Vengeance Upon You!",
//     },
//     {
//         name: "Leonardo DiCaprio",
//         occupation: "Actor",
//         catchPhrase: "I'm the king of the world!!",
//     },
  
// ]

// Celebrity
//     .create(celebrities)
//     .then(allCelebritiesCreated => {
//         console.log(`Created ${allCelebritiesCreated.length} celebrities`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('Hubo un error,', err))



const Movie = require('../models/movies.model')

const dbName = 'celebritiesdb'
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [
    {
        title: "Pulp Fiction",
        genre: "Thriller",
        plot: "Pulp Fiction's narrative is told out of chronological order, and follows three main interrelated stories: Mob contract killer Vincent Vega is the protagonist of the first story, prizefighter Butch Coolidge is the protagonist of the second, and Vincent's partner Jules Winnfield is the protagonist of the third",
    },
    {
        title: "Fight Club",
        genre: "Psychological Drama Thriller",
        plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    },
    {
        title: "The revenant",
        genre: "Drama",
        plot: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    },
    
  
]

Movie
    .create(movies)
    .then(allMoviesCreated => {
        console.log(`Created ${allMoviesCreated.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))

