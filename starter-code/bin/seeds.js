const mongoose = require('mongoose');
// const celebPage = require('../models/celebrity');
const moviePage = require('../models/Movie');

const dbName = 'celebrity-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Tom Cruise",
//     occupation: "Actor",
//     catchPhrase: "...help me help you."
//   },
//   {
//     name: "Sandra Bullock",
//     occupation: "Actress",
//     catchPhrase: "...are you serious?"
//   },
//   {
//     name: "Al Pacino",
//     occupation: "Actor",
//     catchPhrase: "...say hello to my little friend!"
//   }
// ]

// celebPage.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities!`)
//   mongoose.connection.close();
// });

const movies = [
  {
    title: "Mission Impossible",
    genre: "action",
    plot: "International spy battles the bad guys"
  },
  {
    title: "The Lion King",
    genre: "animated",
    plot: "Simba returns to take his throne"
  },
  {
    title: "Shazaam!",
    genre: "comedy",
    plot: "Shaq plays basketball"
  }
]

moviePage.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies!`)
  mongoose.connection.close();
});

