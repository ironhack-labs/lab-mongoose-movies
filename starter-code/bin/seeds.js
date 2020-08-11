const mongoose = require('mongoose');
const MovieModel = require('../models/movie');
const { findOneAndUpdate } = require('../models/celebrity');

//require db config
require('../configs/db.config')

// const celebrities = [
//     {name: 'Elmer Fudd', occupation: 'Hunter', catchPhrase: 'Its rabbit season'},
//     {name: 'Scrooge McDuck', occupation: 'Millionaire', catchPhrase: 'I like gold'},
//     {name: 'Inspector Gadget', occupation: 'Detective', catchPhrase: 'Go! Gadget arm!'}
// ]

// //Create Model

// CelebrityModel.create(celebrities)
//     .then(celebritiesFromDB => {
//         console.log(`Created ${celebritiesFromDB.length} celebrities`)
//         mongoose.connection.close();
//     })
//     .catch(err=> console.log(`Error while created celebrities: ${err}`));


const movies = [
    {title: 'Elmer Shoots a Rabbit', genre: 'Horror', plot: 'Bugs Bunnies last carrot'},
    {title: 'The Rich get Richer', genre: 'Documentary', plot: 'Mr. McDuck becomes the wealthiest duck!'},
    {title: 'Inspector Gadget Unviels the Claw', genre: 'Suspense', plot: 'With the help of Penny and the Brain, Mr. Claws true identity is finally exposed'}
]

//Create Model

MovieModel.create(movies)
    .then(moviesFromDB => {
        console.log(`Created ${moviesFromDB.length} movies`)
        mongoose.connection.close();
    })
    .catch(err=> console.log(`Error while creating movies: ${err}`));
