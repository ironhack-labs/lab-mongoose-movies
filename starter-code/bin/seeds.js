const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model.js");
const Movie = require("../models/Model.movie.js");

const DB_NAME = 'celebrities-project';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const celebrities = [
//     {name: "Goose Man",
//     occupation: "Actor",
//     catchPhrase: "Always willing to get the connections for you"},
//     {name: "Aitor Menta",
//     occupation: "Wind blower",
//     catchPhrase: "Is it just me or it's getting cold?"},
//     {name: "John Doe",
//     occupation: "Unknown",
//     catchPhrase: "Only if I knew..."},
// ]

const movies = [
  {title: "Sinister",
  genre: "Terror",
  plot: "booh"},
  {title: "Sinister 2",
  genre: "Terror",
  plot: "Booh reloaded"},
  {title: "Sinister 3",
  genre: "Terror",
  plot: "Super booh"},
]


// Celebrity.create(celebrities)
//   .then(celebsFromDB => {
//     console.log(`Created ${celebsFromDB.length} celebrities`);
//     // Once created, close the DB connection
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(`An error occurred while creating elements: ${err}`));


  Movie.create(movies)
  .then( moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} movies`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating elements: ${err}`));