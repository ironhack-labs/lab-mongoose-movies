const mongoose = require("mongoose");
// const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model")

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// const celebrities = [
//   { name: 'Angelina Jolie', occupation: 'Actor', catchPhrase: 'I love acting' },
//   { name: 'Ariana Grande', occupation: 'Singer', catchPhrase: 'Breakup with your girlfriend' },
//   { name: 'Rihanna', occupation: 'Singer', catchPhrase: 'Where have you been?' } 
// ];

const movies = [
  { title: 'To the moon', genre: 'Sci-fi', plot: 'Hero dies' },
  { title: 'Happy', genre: 'Romance', plot: 'Marry hero' },
  { title: 'Galaxy', genre: 'Action', plot: 'Kill enemy' } 
];

// Celebrity
// .create(celebrities)
//   .then(celebritiesFromDB => {
//     console.log(`Created ${celebritiesFromDB.length} celebrities`);

//     mongoose.connection.close();
//   })
//   .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));

Movie
  .create(movies)
  .then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} movies`);

    mongoose.connection.close();
  })
  .catch((err) => console.log(`An error occurred while creating movies from the DB: ${err}`));
