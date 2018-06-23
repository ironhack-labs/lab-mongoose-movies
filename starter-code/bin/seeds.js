const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');
const Movie = require('../models/movies');

const dbtitle = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Celebrity.collection.drop();
Movie.collection.drop();

// Celebrity collection
const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Mission Impossible"
  },
  {
    name: "Jackie Chan",
    occupation: "Actor",
    catchPhrase: "Drunken Master"
  },
  {
    name: "Vin Diesel",
    occupation: "Actor",
    catchPhrase: "Fast and Furious"
  }
];

// Movie collection
const movies = [
  {
    title: "Mission Impossible",
    genre: "Action",
    plot: "Awesome"
  },
  {
    title: "Drunken Master",
    genre: "Action",
    plot: "Awesome"
  },
  {
    title: "Fast and Furious",
    genre: "Action",
    plot: "Awesome"
  }
];


Celebrity.create(celebrities)
  .then(celebrity => {celebrities.forEach(celebrity => console.log(`created ${celebrity.name}`));
    mongoose.connection.close( () => { 
      console.log('Mongoose connection disconnected successful!'); 
    });
  })
  .catch(error => {
    throw new Error(`Impossible to add the celebrity. ${error}`);
  });



Movie.create(movies)
.then(movie => {movies.forEach(movie => console.log(`created ${movie.title}`));
  mongoose.connection.close( () => { 
    console.log('Mongoose connection disconnected successful!'); 
  });
})
.catch(error => {
  throw new Error(`Impossible to add the movie. ${error}`);
});