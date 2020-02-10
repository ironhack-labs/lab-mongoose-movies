const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');
const Movie = require('./../models/Movie');


// const dbName = 'celebrityGroup';

// const celebritiesArr = [{
//   name: 'Florence Welch',
//   occupation: 'singer', 
//   catchPhrase: '"Take what the water gave us"'
// }, {
//   name: 'Tom Holland',
//   occupation: 'actor', 
//   catchPhrase: '"I have to be quiet!"'
// }, {
//   name: 'RuPaul',
//   occupation: 'drag queen', 
//   catchPhrase: '"Glamazon!"'
// }]

// mongoose
//   .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
//   .then(() => {
//     const pr = Celebrity.create(celebritiesArr);
//     return pr;
//   })
//   .then((createdCelebrities) => {
//     console.log(`Logged ${createdCelebrities.length} celebrities.`);
//     const pr = mongoose.connection.close();
//     return pr;
//   })
//   .then(() => {console.log('Connection closed!')})
//   .catch( (err) => console.log('Error connecting to mongo', err));

const dbName = 'movieLibrary';

const moviesArr = [{
  title: 'How to Train Your Dragon',
  genre: 'Adventure/Fantasy', 
  plot: 'Viking nerd finds unlikely bestie in the shape of a lizard predator.'
}, {
  title: 'Silent Hill',
  genre: 'Horror/Suspense', 
  plot: 'Single dad loses daughter, finds twilight zone but scarier.'
}, {
  title: "Howl's Moving Castle",
  genre: 'Adventure/Fantasy', 
  plot: 'Relatable young girl feels like 80, finds romance in a pompous egomaniac heartless wizard, and adopts a kid.'
}]

mongoose
.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  const pr = Movie.create(moviesArr);
  return pr;
})
.then((createdMovies) => {
  console.log(`Logged ${createdMovies.length} movies.`);
  const pr = mongoose.connection.close();
  return pr;
})
.then(() => {console.log('Connection closed!')})
.catch( (err) => console.log('Error connecting to mongo', err));