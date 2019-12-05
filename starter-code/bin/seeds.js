// require("dotenv").config();
// const mongoose = require("mongoose");
// const Celebrity = require("../models/Celebrity"); // Import of the model recipe from './models/Recipe'

// // Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
// const celebrities = [
//   { name: "DJ Khaled", occupation: "Rapper", catchPhrase: "Another one" },
//   {
//     name: "Britney Spears",
//     occupation: "Singer",
//     catchPhrase: "It's Britney, bitch"
//   },
//   {
//     name: "Kim Kardashian",
//     occupation: "Model",
//     catchPhrase: "Can I live?"
//   }
// ];

// // connect to database
// mongoose
//   .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
//   .then(x => {
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch(err => {
//     console.error("Error connecting to mongo", err);
//   });

// // insert data to database
// Celebrity.insertMany(celebrities)
//   .then(celebrities => {
//     // display feedback.
//     celebrities.forEach(celebrity => {
//       console.log(celebrity.name);
//     });
//     mongoose.connection.close(); // Properly close mongoose's connection once you're done
//   })
//   .catch(error => {
//     console.log(error);
//   });

require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/Movie"); // Import of the model Recipe from './models/Recipe'
// const dbName = "ironcinema";

const movies = [
  {
    title: "A Wrinkle in Time",
    genre: "wrinkle",
    plot: "wrinkle"
  },
  {
    title: "A Wrinkle in Time",
    genre: "wrinkle",
    plot: "wrinkle"
  },
  {
    title: "A Wrinkle in Time",
    genre: "wrinkle",
    plot: "wrinkle"
  },
  {
    title: "A Wrinkle in Time",
    genre: "wrinkle",
    plot: "wrinkle"
  },
  {
    title: "A Wrinkle in Time",
    genre: "wrinkle",
    plot: "wrinkle"
  }
];

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Movie.insertMany(movies)
  .then(movies => {
    movies.forEach(movie => {
      console.log(movie.title);
    });
    mongoose.connection.close(); // Properly close mongoose's connection once you're done
  })
  .catch(error => {
    console.log(error);
  });
