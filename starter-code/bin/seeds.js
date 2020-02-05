// const celebrities = [
//   {
//     name: "Akua Lindberg",
//     occupation: "singer",
//     catchPhrase: "You can do it!"
//   },
//   {
//     name: "Karolina Czarnowska",
//     occupation: "dancer",
//     catchPhrase: "Oi move it!"
//   },
//   {
//     name: "Keanu Reeves",
//     occupation: "actor",
//     catchPhrase: "prepare to die"
//   },
//   {
//     name: "Diana Ross",
//     occupation: "singer",
//     catchPhrase: "Endless love"
//   },
//   {
//     name: "Daniel Craig",
//     occupation: "actor",
//     catchPhrase: "I have a license ot kill"
//   }
// ];

const movies = [
  {
    title: "escape",
    genre: "drama",
    plot:
      "Afterward, check the database with the mongo command to confirm that your data was saved."
  },
  {
    title: "bulb",
    genre: "comedy",
    plot: "bulb bulb"
  },
  {
    title: "foo",
    genre: "bar",
    plot: "tata"
  }
];
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/starter-code", () => {
  console.log(" CONNECTEEEEEEEEEEED!");
});

// const Celebrity = require("../models/Celebrity.js");

// Celebrity.collection.drop();

// Celebrity.create(celebrities)
//   .then(result => {
//     console.log(`Result: ${result.length}`);
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//   });

const Movie = require("../models/Movie.js");

Movie.collection.drop();

Movie.create(movies)
  .then(result => {
    console.log(`Result: ${result.length}`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
