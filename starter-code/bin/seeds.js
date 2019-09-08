const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Mariah Carey',
    occupation: 'Singer',
    catchPhrase:
      'Whenever I watch TV and see those poor starving kids all over the world, I cant help but cry. I mean Id love to be skinny like that, but not with all those flies and death and stuff.'
  },
  {
    name: 'Marilyn Monroe',
    occupation: 'Model',
    catchPhrase: 'Happy Birthday to you'
  },
  {
    name: 'Paris Hilton',
    occupation: 'Model',
    catchPhrase: 'Thats hot!'
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`${celebrities.length} "celebrities" created.`);
  mongoose.connection.close();
});

// const movies = [
//   {
//     title: "movie 1",
//     genre: "comedy",
//     plot: "blah blah",
//   },
//   {
//     title: "movie 2",
//     genre: "Romance",
//     plot: "blah blah blah blah",
//   },
//   {
//     title: "movie 3",
//     genre: "Gore",
//     plot: "blah blah blah blah blah blah",
//   },

// ];

// Movie.create(movies, (err) => {
//   if (err) {
//     throw (err)
//   }
//   console.log(`${movies.length} "movies" created.`)
//   mongoose.connection.close()
// })
