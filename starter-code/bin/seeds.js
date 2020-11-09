/*NOTE: La unica manera que hice que esto funcione fue navegando a starter-code/bin/ en la consola y 
corriendo "node seeds.js". Como se deberia de hacer?

//ITERATION 1 (NO BORRAR!!)

// const celebrities = [
//     {
//         name: "Maluma",
//         occupation: "Reggaetonero",
//         catchPhrase: "Maluma baby"
//     }, 
//     {
//         name: "J Balvin",
//         occupation: "Reggaetonero",
//         catchPhrase: "J Balvin man"
//     },
//     {
//         name: "Kevin Roldán",
//         occupation: "Rapero",
//         catchPhrase: "Ka Erre"
//     }
// ];

// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity')

// mongoose
//   .connect('(seeds.js) mongodb://localhost/starter-code', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .then(() => {
//     Celebrity.insertMany(celebrities)
//     .then(console.log("Successfully added Celebrities"))
//     .catch(err => console.log(err))
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

//ITERATION 2 (NO BORRAR!!)

// const movies = [
//     {
//         title: "Movie1",
//         genre: "Horror",
//         plot: "Phasellus suscipit lectus ac dui congue elementum. Aenean sed faucibus dolor, a blandit orci. Praesent."
//     },
//     {
//         title: "Movie2",
//         genre: "Comedy",
//         plot: "Ut at euismod tortor. Vivamus vel ipsum quis est sagittis suscipit vitae hendrerit mi. Aliquam."
//     },
//     {
//         title: "Movie3",
//         genre: "Drama",
//         plot: "Vestibulum ut consequat eros, vitae pellentesque urna. Pellentesque efficitur augue sit amet ligula euismod, ultricies."
//     }
// ]

// // //ITERATION 7 (NO BORRAR!!)

// const mongoose = require('mongoose');
// const Movie = require('../models/movie')

// mongoose
//   .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .then(() => {
//     Movie.create(movies)
//     .then(console.log("Successfully added Movies"))
//     .catch(err => console.log(err))
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });




