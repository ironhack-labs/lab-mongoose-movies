const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')



// const dbName = 'fake-celebrity';
// mongoose.connect(`mongodb://localhost/${dbName}`);
const dbName = 'fake-celebrity';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Iron Man",
    genre: "Action",
    plot: "Iron man saves the world"
  },
  {
    title: "titanic",
    genre: "boring",
    plot: "jack dies"
  },
  {
    title: "scooby",
    genre: "cartoons",
    plot: "scooby is very scared of ghosts"
  },

];



Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});

// const celebrities = [
//   {
//     name: "robert downey jr",
//     ocupation: "Actor",
//     catchPhrase: "we got a hulk"
//   },
//   {
//     name: "Tom Cruise",
//     ocupation: "Actor",
//     catchPhrase: "Show me the money"
//   },
//   {
//     name: "Jay z",
//     ocupation: "Singer",
//     catchPhrase: "Either love me or leave me alone"
//   },
// ];


// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// });
