const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movies.js');
const DB_NAME = 'lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [{
  title: 'Cine Holliúdi',
  genre: 'drama',
  plot: 'blabla'
},
{
  title: 'IT',
  genre: 'horror',
  plot: 'lalala'
},
{
  title: 'Movie',
  genre: 'comedy',
  plot: 'dorime'
}
];
Movie.create(movies, err => {
if (err) {
  throw err;
}
console.log(`Created ${movies.length} movies`);
mongoose.connection.close();
});

// const celebrities = [
//   {
//   name: 'Lady Gaga',
//   occupation: 'Singer',
//   catchPhrase: 'Po-po-po-poker face, po-po-poker face',
//   },
//   {
//   name: 'Cardi B',
//   occupation: 'Singer',
//   catchPhrase: 'Corona Virus!',
//   },
//   {
//   name: 'Mr. Miyagi',
//   occupation: 'Teacher',
//   catchPhrase: 'Take out coat, put on coat',
//   }
// ];

// Celebrity.create(celebrities, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });