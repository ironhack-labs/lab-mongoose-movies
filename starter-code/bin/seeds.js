const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");
const Movie = require("../models/movie.js");

// connect to the database we want to put our stuff in
mongoose.connect("mongodb://localhost/Celebrities", {
  useNewUrlParser: true
});

// console.log("we imported the model we want to use");
// // inside of this we will perform a crud operation

const movieArray = [
  {
    title: "Gone with the wind",
    genre: "Comedy",
    plot: "they all die"
  },
  {
    title: "Dumb and Dumberer",
    genre: "drama",
    plot: "live happy"
  },
  {
    title: "Connor McGregor",
    genre: "docu",
    plot: "fighting docu"
  }
];

// Celebrity.create(celebArray)
//   .then(dbRes => {
//     console.log(dbRes, "is our dbRes");
//   })
//   .catch(dbErr => {
//     console.log(dbErr, "is our dbErr");
//   });

Movie.create(movieArray)
  .then(dbRes => {
    console.log(dbRes, "is our database");
  })
  .catch(dbErr => {
    console.log(dbErr, "is our an error in our database upload");
  });
