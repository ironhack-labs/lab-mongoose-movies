 const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')
const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

//Celebrity seed
// const celebrities = [
//     {
//        name: 'Steve Carrell',
//        occupation: 'Comedian',
//        catchPhrase: "That's what she said"

//     },
//     {
//         name: 'Matt LeBlanc',
//         occupation: 'Actor',
//         catchPhrase: "How you doin"
 
//      },
//      {
//         name: 'Lady Gaga',
//         occupation: 'singer',
//         catchPhrase: "I've always been famous, it's just no one knew it yet."
 
//      },
// ]


// Celebrity.create(celebrities)
//     .then(allCelebrities => {
//         console.log(`${allCelebrities} created`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log(`An error ocurred: ${err}`)) 

const movies = [
    {
        title: 'El niño con el pijama de rayas',
        genre: 'Drama',
        plot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Joker',
        genre: 'Drama',
        plot: 'Sit cum nihil earum repudiandae, ipsum similique laudantium dolore?'
    },
    {
        title: 'El diario de Noa',
        genre: 'Romántico',
        plot: 'Lorem ipsum dolor sit amet, ipsum similique laudantium dolore?'
    }
]

Movie.create(movies)
    .then(allMovies => {
        console.log(`${allMovies} created`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error ocurred: ${err}`)) 
