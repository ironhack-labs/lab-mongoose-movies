// const celebrities = [
//     {
//         name: 'DJ Khaled',
//         occupation: 'DJ',
//         catchPhrase: 'DJ Khaled!'
//     },
//     {
//         name: 'Fetty Wap',
//         occupation: 'Singer',
//         catchPhrase: '1738'
//     },
//     {
//         name: 'Craque Neto',
//         occupation: 'Presenter',
//         catchPhrase: 'Digassi di passagi'
//     }
// ]

// const mongoose = require('mongoose');

// const Celebrity = require('../models/celebrity.js');

// require('../app.js')

// Celebrity.insertMany(celebrities)
// .then(celebrityCreated => {
//     console.log(celebrityCreated)
// })
// .catch(error => {
//     console.log(error)
// })

const movies = [
    {
        title: 'Ironhackman',
        genre: 'Fiction',
        plot: 'Like Ironman from Marvel, but not quite'
    },
    {
        title: 'Finding Ironhack',
        genre: 'Animation',
        plot: 'A dev professor loses his students and go on an adventure to look for him'
    },
    {
        title: 'Ironhack Club',
        genre: 'Drama',
        plot: 'First rule of Ironhack Club: you do not talk about Ironhack Club'
    }
]

const mongoose = require('mongoose');

const Movies = require('../models/movie.js');

require('../app.js')

Movies.insertMany(movies)
.then(movieCreated => {
    console.log(movieCreated)
})
.catch(error => {
    console.log(error)
})
