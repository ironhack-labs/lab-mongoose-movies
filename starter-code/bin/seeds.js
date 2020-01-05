// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// const dbName = 'starter-code';
// mongoose.connect(`mongodb://localhost/${dbName}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

// const celebrities = [{
//   name: 'Hello Kitty',
//   occupation: 'actress',
//   catchPhrase: 'So cute!!!'
// }, {
//   name: 'Jax Teller',
//   occupation: 'singer',
//   catchPhrase: 'Come join the murder'
// }, {
//   name: 'Miriam Carvalho',
//   occupation: 'comedian',
//   catchPhrase: 'Lets eat ramen'
// }]

// Celebrity.create(celebrities)
//   .then(celebrities => {
//     console.log(`All celebrities saved in database: ${celebrities.length}`);
//     mongoose.connection.close();
//   })
//   .catch(error => console.log('Error while saving celebrities in the database', error));


const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const movies = [{
  title: 'Un colpo del destino',
  genre: 'Drama',
  plot: 'Come tutte le matine, Leonora è svegliata presto e ha fatto colazione ammirando il mare dal suo balcone. Tutto sembrava calmo e esattamente come doveva essere ma in un attimo tutto è cambiato... Leonora aveva i suoi occhi fissati nel ragazzo che correva verso l\'oceano quando lui semplicemente è sparito. Cosa stava succedendo?',
}, {
  title: 'Too many likes',
  genre: 'Action',
  plot: 'An instagramer chasing fame by any cost is taken in the adventure of her life. Now, she has to fight her way out of the prison she finds herself in...',
}, {
  title: 'Gray skies',
  genre: 'Thriller',
  plot: 'It was just another ordinary day in São Paulo for Adriana when she received the awful news from her parents. Something was not quite right about it all that was said. That afternoon the sky turned gray and her life was never the same...',
}];

Movie.create(movies)
.then(allMovies => {
  console.log(`All movies saved in database: ${allMovies.length}`);
  mongoose.connection.close();
})
.catch(error => console.log('Error while saving movies in the database', error));