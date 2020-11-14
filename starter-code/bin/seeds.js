//Creation of Celebrity DB in MongoDB.

// const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity')

// mongoose.connect(`mongodb://localhost/starter-code`)

// const celebrity = [
//     {
//         name: 'Marlon Brando',
//         occupation: 'Actor',
//         catchPhrase: 'I have an offer that you cannot refuse'
//     },
//     {
//         name: 'Tom Cruise',
//         occupation: 'Actor',
//         catchPhrase: 'I like action movies'
//     },
//     {
//         name: 'Nicole Kidman',
//         occupation: 'Actress',
//         catchPhrase: 'I hate Tom Cruise'
//     }
//   ]

//   Celebrity.create(celebrity, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${celebrity.length} celebrities`)
//     mongoose.connection.close()
//   })

// Creation of Movies DB in MongoDB.
const mongoose = require('mongoose')
const Movie = require('../models/movie')

mongoose.connect(`mongodb://localhost/starter-code`)

const movies = [
    {
        title: 'Barry Lyndon',
        genre: 'Drama',
        plot: `An Irish rogue wins the heart of a rich widow and assumes her dead husband's aristocratic position in 18th-century England.`
    },
    {
        title: 'Pulp Fiction',
        genre: 'Drama',
        plot: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`
    },
    {
        title: 'Ben-Hur',
        genre: 'Adventure',
        plot: `After a Jewish prince is betrayed and sent into slavery by a Roman friend, he regains his freedom and comes back for revenge.`
    }
]

Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
})