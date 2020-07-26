const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

// const arrCeleb = [
//   {
//     name: "The Soup Nazi",
//     occupation: "Chef",
//     catchPhrase: "No soup for you!"
//   },
//   {
//     name: "Fox Mulder",
//     occupation: "Detective",
//     catchPhrase: "The truth is out there"
//   },
//   {
//     name: "Elaine Benes",
//     occupation: "Editor",
//     catchPhrase: "Yada, yada, yada"
//   }
// ];

// Celebrity.create(arrCeleb, (err) => {
//   if (err) {throw(err) }
//   console.log(`There are ${arrCeleb.length} new celebrities in town!`)
//   mongoose.connection.close();
// })

const arrMovies = [
  {
    title: 'The bad song',
    genre: 'Drama',
    plot: 'A guy that only recommends bad music came across with the worst song ever.'
  },
  {
    title: 'Fake Movies',
    genre: 'Documentary',
    plot: 'A company that delivers fake trailers for movies that never will be made recieves an offer impossible to refuse.'
  },
  {
    title: 'The bootcamp',
    genre: 'mockumentary',
    plot: 'Mockumentary based on the daily events of a bootcamp campus and his students.' 
  },

];

Movie.create(arrMovies, (err) => {
  if (err) {throw(err)}
  console.log(`There are ${arrMovies.length} new movies to watch!`)
  mongoose.connection.close();
})


