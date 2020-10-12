const mongoose = require('mongoose')

// const celebrityModel = require('../models/celebrity')

const movieModel = require('../models/movie')

require('../configs/db.config')

// let celebrityData = [
    
//     {   name: 'Robert Deniro',
//         occupation: 'Actor',
//         catchPhrase: 'The talent is in the choices.',
//     },
//     {   name: 'Tom Cruise',
//         occupation: 'Actor',
//         catchPhrase: 'I love kids. I was a kid myself, once.',
//         },
//     {   name: 'Kim Kardashian',
//         occupation: 'Celebrity',
//         catchPhrase: 'Holidays are the best',
//     }
// ]


// celebrityModel.insertMany(celebrityData)
// .then(() =>{
//     console.log('Data was added')
//     mongoose.connection.close()
// })
// .catch((err) =>{
//     console.log('Data wasnt added',err)
// })

let movieData = [
    
    {   title: 'Titanic',
        genre: 'Drama',
        plot: 'VERY SAD',
    },
    {   title: 'Home Alone',
        genre: 'comedy',
        plot: 'Very very funny',
    },
    {   title: 'Star Wars',
        genre: 'Sci Fi',
        plot: 'May the force be with you',
    }    
]


movieModel.insertMany(movieData)
.then(() =>{
    console.log('Data was added')
    mongoose.connection.close()
})
.catch((err) =>{
    console.log('Data wasnt added',err)
})