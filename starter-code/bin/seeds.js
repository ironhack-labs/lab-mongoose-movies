const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err))

// const feedCelebrities = [
//     {
//         name: 'Clinton Eastwood Jr.',
//         occupation: 'Actor',
//         catchPhrase: 'Tomorrow is promised to no one'
//     },
//     {
//         name: 'Rami Said Malek',
//         occupation: 'Actor',
//         catchPhrase: `People used to think of me as a comedy actor`
//     },
//     {
//         name: 'Adele Laurie Blue Adkins',
//         occupation: 'Singer',
//         catchPhrase: `People are starting to go on about my weight but I'm not going to change my size because they don't like the way I look`
//     }
// ]

const feedMovies = [
    {
        title: 'Mulan',
        genre: 'Action',
        plot: `A young Chinese maiden disguises herself as a male warrior in order to save her father. A live-action feature film based on Disney's 'Mulan.'`
    },
    {
        title: 'Master and Commander',
        genre: 'Adventure',
        plot: `During the Napoleonic Wars, a brash British captain pushes his ship and crew to their limits in pursuit of a formidable French war vessel around South America.`
    },
    {
        title: 'La La Land',
        genre: 'Musical',
        plot: `While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.`
    }
]

Movie.create(feedMovies)
    .then(items => console.log(`${items.length} have been created`))
    .catch(err => console.log(`Error occured creating celebrities: ${err}`))