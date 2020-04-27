const mongoose = require('mongoose');
const Celebrity = require('./../models/celebrity');
const DB_NAME = 'celebrity';
const Movie = require('./../models/movie')

const celebrities = [{
  name: 'Mr. Commit',
  occupation: 'Developer',
  catchPhrase: 'Never commit tomorrow what you can commit today'
},
{
  name: 'Mr. Promise',
  occupation: 'Developer',
  catchPhrase: 'I promise you will not regret'

},
{
  name: 'Mr. Error',
  occupation: 'Developer',
  catchPhrase: 'Try and catch my ass'
}
]

const movies = [{
  title: 'Promises from Hell',
  genre: 'Terror',
  plot: 'bla bla bla'
},
{
  title: 'Back to frontEnd',
  genre: 'Comedy',
  plot: 'bli bla blu'

}, 
{
  title: 'Lost in documentation',
  genre: 'Drama',
  plot: 'pim pam pum bla bla'
}]


// SEED SEQUENCE

// // 1. CONNECT TO MONGOOSE
// mongoose.connect(
//   `mongodb://localhost:27017/${DB_NAME}`,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
//   .then((x) => {
//     console.log(`Connected to DB: ${x.connections[0].name}`);
//     // 2. CREATE THE DOCUMENT FROM THE ARRAY OF `celebrities`
//     const createCelebritiesPr = Celebrity.create(celebrities);
//     return createCelebritiesPr;
//   })
//   .then((createdCelebrities) => {
//     console.log(`Inserted books: ${createdCelebrities.length}`)
//     // 3. CLOSE THE DB CONNECTION

//     const closePr = mongoose.connection.close();
//     return closePr;
//   })
//   .then(() => {
//     console.log('Closed the DB connection');
//   })
//   .catch((err) => console.log(err));

  // 1. CONNECT TO MONGOOSE
mongoose.connect(
  `mongodb://localhost:27017/${DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then((x) => {
    console.log(`Connected to DB: ${x.connections[0].name}`);
    // 2. CREATE THE DOCUMENT FROM THE ARRAY OF `celebrities`
    const createmoviesPr = Movie.create(movies);
    return createmoviesPr;
  })
  .then((createdmovies) => {
    console.log(`Inserted books: ${createdmovies.length}`)
    // 3. CLOSE THE DB CONNECTION

    const closePr = mongoose.connection.close();
    return closePr;
  })
  .then(() => {
    console.log('Closed the DB connection');
  })
  .catch((err) => console.log(err));