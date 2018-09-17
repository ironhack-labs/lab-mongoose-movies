// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// const dbName = 'my-celebrities';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Sylwia Poplawska",
//     occupation: "actor",
//     catchPhrase: "I want to be Marilyn Monroe of 21th century"
//     },
//   {
//     name: "Monika Szadkowska",
//     occupation: "kite surfer",
//     catchPhrase: "Zycie jest jak rower "    
//   },
//   {
//     name: "Brodka ",
//     occupation: "singer",
//     catchPhrase: "Lubie lato w Varsovie"  
//   }  
// ]

// Celebrity.collection.drop();

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// });

const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'my-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Perfect Day",
    genre: "drama",
    plot: "War in Balkans"
    },
  {
    title: "buu",
    genre: "comedy",
    plot: "Zycie jest jak rower "    
  },
  {
    title: "show ",
    genre: "drama",
    plot: "Lubie lato w Varsovie"  
  }  
]

Movie.collection.drop();

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});
