const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrity = [
//   {
//     name: "Scooby Doo",
//     occupation: "Solving crimes and eating Scooby Snacks",
//     catchPhrase: "Scooby Dooby Doo!"
//   },
//   {
//     name: "Fred Flintstone",
//     occupation: "Prehistoric Quarry Worker",
//     catchPhrase: "Yabba Dabba Doo!"
//   },
//   {
//     name: "The Road Runner",
//     occupation: "Shopping at ACME and tormenting Wile E. Coyote",
//     catchPhrase: "Beep Beep!"
//   }
// ]

// Celebrity.create(celebrity, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrity.length} celebrity`)
//   mongoose.connection.close()
// });

const movie = [
  {
    title: "Back to the Future",
    genre: "Comedy",
    plot: "A high school student goes back in time to make sure his parents hook up"
  },
  {
    title: "Lord of the Rings",
    genre: "Fantasy",
    plot: "Star Wars set in Middle Earth"
  },
  {
    title: "Star Wars",
    genre: "SciFi",
    plot: "Lord of the Rings set in space"
  }
]

Movie.create(movie, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movie.length} movies`)
  mongoose.connection.close()
});