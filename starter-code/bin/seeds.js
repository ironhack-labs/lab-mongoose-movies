const mongoose = require("mongoose");
const movieModel = require("./../models/Movie");
// const celibrityModel = require("./../models/Celebrity");

const moviesDb = [
  {
    title: "The Godfather",
    genre: "crime",
    plot: ""
  },
  {
    title: "Malcom X",
    genre: "crime comedy",
    plot: ""
  },
  {
    title: "Scarface",
    genre: "crime drama",
    plot: ""
  }
 ]


// const celebritiesDb = [
//   {
//     name: "Mohammed Ali",
//     occupation: "Boxer",
//     catchPhrase: "A man who has no imagination has no wings."
//   },
//   {
//     name: "Malcom X",
//     occupation: "Minister",
//     catchPhrase: "A man who stands for nothing will fall for anything."
//   },
//   {
//     name: "Martin Luther King",
//     occupation: "Minister",
//     catchPhrase: "We must accept finite disappointment, but never lose infinite hope."
//   }
//  ]


//CONNECTION SETTINGS TO MONGOOSE
mongoose
.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

movieModel.create(moviesDb)
  .then(dbSuccess => {
  console.log("movies inserted successfully", dbSuccess);
  })
  .catch(dbErr => {
   console.log("Oh no ! error !", dbErr);
  })

// celibrityModel.create(celebritiesDb)
//   .then(dbSuccess => {
//   console.log("celebrities inserted successfully", dbSuccess);
//   })
//   .catch(dbErr => {
//    console.log("Oh no ! error !", dbErr);
//   })