const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

// const list = [
//     {
//         name: 'Tom Holland',
//         occupation: 'Spider-Man',
//         catchPhrase: 'Web web bitch'
//     },
//     {
//         name: 'Robert Downey Jr',
//         occupation: 'Iron Man',
//         catchPhrase: 'I am Iron Man'
//     },
//     {
//         name: 'Steve Carell',
//         occupation: 'Regional Manager',
//         catchPhrase: "That's what she Said"
//     }
// ]


const movieList = [
    {
        title: 'Avengers: Endgame',
        genre: 'Action',
        plot: 'Disney tries and succeeds in raking a ton of ca$h'
    },
    {
        title: 'It',
        genre: 'Horror',
        plot: 'Scary clown with red balloons like killing kids'
    },
    {
        title: 'A Star Is Born',
        genre: 'Drama',
        plot: 'The movie where that song Shallow is from'
    }
]


mongoose
  .connect('mongodb://localhost/Celebrity-List', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))

  

  .catch(err => console.error('Error connecting to mongo', err));



  Movie.create(movieList)

