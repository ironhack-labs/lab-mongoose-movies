const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'celebrity-db';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [{
//     name: "Tony Stark",
//     occupation: "Actor",
//     catchPhrase: "I'm Iron Man",
//   },
//   {
//     name: "Peter Parker",
//     occupation: "Actor",
//     catchPhrase: "With great power, comes great responsibility",
//   },
//   {
//     name: "Thor Odinson",
//     occupation: "comedian",
//     catchPhrase: "Thor, love and thunder",
//   },
//   {
//     name: "Natasha Romanoff",
//     occupation: "singer",
//     catchPhrase: "I'm dead now",
//   }
// ];

const movies = [{
  title: "Iron Man Stark",
  genre: "Action",
  plot: "The best Heroe of Marvel...",
},
{
  title: "Spider Man",
  genre: "Action",
  plot: "Spider Man save MJ and...",
},
];

Movie.create(movies, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});