const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');


const dbTitle = 'webmad0120-lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbTitle}`);


Movie.collection.drop();

const movies = [
  {
    title: "Alien",
    genre: "Sci-Fi",
    plot: "An alien having fun."
  },
  {
    title: "Home Alone",
    genre: "Comedy",
    plot: "A kid having fun."
  },
  {
    title: "Batman",
    genre: "Action",
    plot: "A batguy having fun."
  },
]

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});










// Celebrity.collection.drop();

// const celebrities = [
//   {
//     name: "Tim Roth",
//     occupation: "Actor",
//     catchPhrase: "I can't do anything else. So if this falls through, I'm screwed."
//   },
//   {
//     name: "Philip Seymour Hoffman",
//     occupation: "Actor",
//     catchPhrase: "There is no pleasure that I haven't made myself sick on."
//   },
//   {
//     name: "Leonardo DiCaprio",
//     occupation: "Actor",
//     catchPhrase: "If you can do what you do best and be happy, you're further along in life than most people."
//   },
// ]

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw (err) }
//   console.log(`Created ${celebrities.length} movies`)
//   mongoose.connection.close();
// });