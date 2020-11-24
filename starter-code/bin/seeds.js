const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

mongoose
  .connect('mongodb://localhost/mongoose-movies', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

// const celebrities = [
// {
//     name: "Johnny Depp",
//     occupation: "actor",
//     catchPhrase: "Lorem ipsum"
// }, {
//     name: "Tina Turner",
//     occupation: "singer",
//     catchPhrase: "Lorem ipsum"
// }, {
//     name: "Kevin Hart",
//     occupation: "comedian",
//     catchPhrase: "Lorem ipsum"
// }];

// Celebrity.create(celebrities)
// .then((celebritiesFromDB) => {
//     console.log(`The following celebrities were created in the DB: ${celebritiesFromDB}`);
//     mongoose.connection.close();
// })
// .catch((error) => console.log(`An error occurred while creating celebrities from the DB: ${error}`));

const movies = 
[{
  title: "Shutter Island",
  genre: "thriller",
  plot: "Lorem ipsum"
}, {
  title: "Titanic",
  genre: "drama",
  plot: "Lorem ipsum"
}, {
  title: "Bridesmaids",
  genre: "comedy",
  plot: "Lorem ipsum"
}];

Movie.create(movies)
  .then((moviesFromDB) => {
    console.log(`The following celebrities were created in the DB: ${moviesFromDB}`);
    mongoose.connection.close();
  })
  .catch((error) => console.log(`An error occurred while creating celebrities from the DB: ${error}`));