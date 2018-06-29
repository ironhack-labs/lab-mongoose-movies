const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");
const Movie = require("../models/movie.js");

const dbtitle = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const celebrities = [
  {
    name: "Jim Carrey",
    occupation: "Actor",
    catchphrase: "Alrighty then!"
  },
  {
    name: "Tom Hanks",
    occupation: "Actor",
    catchphrase: "Life is like a box of chocolates"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchphrase: "Put a ring on it!"
  }
];

const movies = [
  {
    title: "Home Along",
    genre: "Comedy",
    plot: "kid is left home, fight sticky bandits!"
  },
  {
    title: "Goodfellas",
    genre: "Drama",
    plot: "crime"
  },
  {
    title: "Walk the Line",
    genre: "Bio",
    plot: "Johnny Cash's life"
  }
];

//Adding celebrities array into DB.
// Celebrity.insertMany(celebrities)
//   .then(celebrity => {
//     console.log(`Celebrities have been saved to DB`, celebrity);
//   })
//   .catch(err => {
//     console.log("Error: ", err);
//   });

//Adding celebrities array into DB.
Movie.insertMany(movies)
  .then(movie => {
    console.log(`Movies have been saved to DB`, movie);
  })
  .catch(err => {
    console.log("Error: ", err);
  });
