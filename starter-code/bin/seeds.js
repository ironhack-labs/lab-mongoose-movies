const mongoose = require("mongoose");
// const Celebrity = require("../models/Celebrity");
const Movies = require("../models/Movie");

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

// const celebrity = [
//   {
//     name: "Hulk Hogan",
//     occupation: "pro wrestler",
//     catchPhrase: "Eat your vitamins and say your prayers"
//   },

//   {
//     name: "Rodney Dangerfield",
//     occupation: "comedian",
//     catchPhrase: "I don't get no respect!"
//   },

//   {
//     name: "Mr. T.",
//     occupation: "actor",
//     catchPhrase: "I pity the fool."
//   }
// ];

// Celebrity.create(celebrity)
//   .then(() => {
//     console.log("it worked");
//   })
//   .catch(() => {
//     console.log("it didnt work");
//   });

const movies = [
  {
    title: "Bing Bong",
    genre: "mystery",
    celebrity: "Beef Jelly",
    plot: "A cybernetic alien lost his dog"
  },
  {
    title: "Denisho's Breakfast",
    genre: "romantic comedy",
    celebrity: "Rodney Dangerfield",
    plot: "you think you know someone, until you don't"
  },
  {
    title: "Peppy Coursework",
    genre: "Philanthropy",
    celebrity: "Slappy Pappy",
    plot: "Giving back pepperonies"
  }
];

Movies.create(movies);
