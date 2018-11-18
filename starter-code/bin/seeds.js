require('dotenv').config();
// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
// mongoose.connect(`mongodb://localhost/${process.env.DB}`);

// const celebrities = [
//   {
//     name: "celebrity1",
//     occupation: "Actor1",
//     catchPhrase: "Phrase1"
//   },
//   {
//     name: "celebrity2",
//     occupation: "Actor2",
//     catchPhrase: "Phrase2"
//   },
//   {
//     name: "celebrity3",
//     occupation: "Actor3",
//     catchPhrase: "Phrase3"
//   }
// ]

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw (err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// });

const mongoose = require('mongoose');
const Movie = require('../models/movie');
mongoose.connect(`mongodb://localhost/${process.env.DB}`);

const movies = [
  {
    title: "movie1",
    genre: "genre1",
    plot: "plot1"
  },
  {
    title: "movie2",
    genre: "genre2",
    plot: "plot2"
  },
  {
    title: "movie3",
    genre: "genre3",
    plot: "plot3"
  }
]

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});