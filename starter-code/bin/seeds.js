const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);
const Movie = require('../models/movie');


// let celebs = [{
//   name: "Francesca",
//   occupation: "Air Traffic Controller",
//   catchPhrase: "Bring em out!"
// },
// {
//   name: 'Jim Carey',
//   occupation: 'actor',
//   catchPhrase: 'Alrighty, then!'
// },
// {
// name: 'Kevin Hart',
// occupation: 'comedian',
// catchPhrase: 'You see, the way my account set up...'
// }]

// let movies = [{
//   title: "The Village",
//   genre: "Thriller",
//   plot: "Don't go into the forest"
// },
// {
//   title: "Signs",
//   genre: "Thriller",
//   plot: "Aliens are bad"
// },
// {
//   title: "The Happening",
//   genre: "Thriller",
//   plot: "Stay inside"
// }]

// Movie.create(movies, err =>{

// if(err){
//   throw(err)

// }
// console.log("movies created! :D")
// mongoose.connection.close();
// })



// // export object
// module.exports = movies;
