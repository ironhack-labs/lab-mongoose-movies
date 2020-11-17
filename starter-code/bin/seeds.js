const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')
const DB_NAME = 'starter-code'

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// mongoose
//   .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });


// const celebs = [
//     {
//         name: 'Milena',
//         occupation: 'Backend Developer',
//         catchPhrase: 'I dont know how it works, but it works!'
//     },
//     {
//         name: 'Franck',
//         occupation: 'Fullstack Developer',
//         catchPhrase: 'True story!'
//     },
//     {
//         name: 'Monique',
//         occupation: 'unknown',
//         catchPhrase: 'And, and, and...'
//     },
// ]

// // SEED DB
// Celebrity.create(celebs)
// .then(celebsFromDB => {
//   console.log(`Created in DB: `, celebsFromDB);
//   // Once created, close the DB connection
//   mongoose.connection.close();
// })
// .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));

const moviesArray = [
  {
    name: 'The English Patient',
    genre: 'Romantic war drama',
    plot: 'In Italy a nurse takes care of a unknown english patient and reads him his diary where he wrote about his romances during the war in Africa.'
  },
  {
    name: 'Chocolate',
    genre: 'Romance',
    plot: 'A woman and her daughter are moving to a small village in France and open a chocolaterie. This causes a lot of noise for the residents.'
  },
  {
    name: 'Alles is liefde',
    genre: 'Comic',
    plot: 'It is almost 5 december and nobody should be alone...'
  }
]

Movie.create(moviesArray)
.then(allMoviesInDb => {
  console.log('Created in DB: ', allMoviesInDb)
  mongoose.connection.close();
})
.catch(err => {console.log('There has been an error: ', err)})