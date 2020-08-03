const mongoose = require('mongoose');
const CelebrityModel = require('../models/celebrity.model');
const app = require('../app');
const MoviesModel = require('../models/movies.model');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// let celebrities = [
//     {
//         name: "Beyonce",
//         occupation: "singer",
//         catchPhrase: "All the single ladies"
//     },
//     {
//         name: "Benedict Cumberbatch",
//         occupation: "actor",
//         catchPhrase: "I look like an otter"
//     },
//     {
//         name: "Manish",
//         occupation: "nerdteacher",
//         catchPhrase: "That\'s not my age"
//     }
// ];

// CelebrityModel.create(celebrities)
//     .then((response) => {
//         console.log(response)
//         mongoose.connection.close()
//         .then(() => {
//             console.log("Connection closed")
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     })
//     .catch((err) => {
//         console.log(err)
//     })

let movies = [
    {
        title: "Amelie",
        genre: "feelgood",
        plot: "French stuff"
    },
    {
        title: "Harry Potter and the Code Error",
        genre: "desperation",
        plot: "we will see in 5 weeks"
    },
    {
        title: "The Dutch cannot drown",
        genre: "patriotic",
        plot: "Plot twist: they all drown"
    }
];

MoviesModel.create(movies)
    .then((response) => {
        console.log(response)
        mongoose.connection.close()
        .then(() => {
            console.log("Connection closed")
        })
        .catch((err) => {
            console.log(err)
        })
    })
    .catch((err) => {
        console.log(err)
    })