const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

mongoose
  .connect('mongodb://localhost/movies-celebrities', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// const celebrities = [
//     {
//         name: "Freddie Mercury",
//         occupation: "Singer",
//         catchPhrase: "Show must go on"
//     },
//     {
//         name: "Harry Potter",
//         occupation: "Wizard",
//         catchPhrase: "The boy who lived"
//     },
//     {
//         name: "Voldemort",
//         occupation: "The bad guy",
//         catchPhrase: "Avada Kedavra"
//     }
// ];

// Celebrity.create(celebrities)
// .then(newCelebrities => {
//     console.log(`You just uploaded ${newCelebrities.length} celebrities to the database!`);
//     mongoose.connection.close();
// })
// .catch(error => {
//     console.log('There was an error while uploading your celebrities to the database: ', error);
// });

const movies = [
  {
      title: "Home Alone",
      genre: "Comedy",
      plot: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
  },
  {
      title: "Harry Potter and the Philosopher's Stone",
      genre: "Fantasy",
      plot: "It follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry."
  },
  {
      title: "Interstellar",
      genre: "Adventure/Drama/Sci-Fi",
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  }
];

Movie.create(movies)
.then(newMovies => {
  console.log(`You just uploaded ${newMovies.length} movies to the database!`);
  mongoose.connection.close();
})
.catch(error => {
  console.log('There was an error while uploading your movies to the database: ', error);
});