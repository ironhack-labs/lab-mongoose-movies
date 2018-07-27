const mongoose = require('mongoose');
const Celebrity = require("../models/celebrity");
const Movie = require('../models/movie');
const Schema = mongoose.Schema;

// const celebritySchema = new Schema({
//   name          : String,
//   occupation    : String,
//   catchPhrase   : String
// });

const movieSchema = new Schema({
  title   : String,
  genre   : String,
  plot    : String
});

// const Celebrity = mongoose.model('Celebrity', celebritySchema);
// const Movie = mongoose.model('Movie', movieSchema);

mongoose.connect('mongodb://localhost/celebrities')
.then(() => {
  console.log('Connected to Mongo!')
}).catch(err => {
  console.error('Error connecting to mongo', err)
});


// const celebrityArray = [
//   { 
//     name          : "Dory",
//     occupation    : "Fish",
//     catchPhrase   : "Just keep swimming."
//   },
//   { 
//     name          : "Pitbull",
//     occupation    : "Mr. Worldwide",
//     catchPhrase   : "Dale."
//   },
//   { 
//     name          : "Mario",
//     occupation    : "Adventurer",
//     catchPhrase   : "Mario Time!"
//   },
// ]


// Celebrity.create(celebrityArray, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrityArray.length} celebrities`)
//   mongoose.connection.close()
// });

const movieArray = [
  {
    title : "Finding Dory",
    genre: "Comedy",
    plot: "Dory is in search of her parents who are also in search of her!"
  },
  {
    title : "Mr. Worldwide",
    genre: "Drama",
    plot: "A pitbull travels the world singing."
  },
  {
    title : "Mario vs. Luigi",
    genre: "Action",
    plot: "Mario and Luigi face off."
  }
]

Movie.create(movieArray, (err) => {
  if(err) {throw(err)}
  console.log('Created ${movieArray.length} movies')
  mongoose.connection.close()
})