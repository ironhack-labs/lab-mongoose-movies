const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require('../models/Movie');

// Establish a connection
const DB_NAME = "lab-mongoose-movies";

// const celebrities = [
//   {
//     name: "The Rock",
//     occupation: "unknown",
//     catchPhrase: "If you smeeeeeeelllll what the Rock is cookin'",
//   },
//   {
//     name: "Jim Jones",
//     occupation: "singer",
//     catchPhrase: "We balliiiiiiinnnnnn'",
//   },
//   {
//     name: "Bill Engvall",
//     occupation: "comedian",
//     catchPhrase: "Here's your sign...",
//   },
// ];

const movies = [
  {
    name: "Greatest Movie Ever",
    genre: "comedy",
    plot:
      "This is not the greatest movie in the world, oh no!  This is just a tribute!",
  },
  {
    name: "Worst Movie Ever",
    genre: "romance",
    plot: "Omg I'm just a bad movie!  How could anybody sit through me!?",
  },
  {
    name: "Just an Average Movie",
    genre: "action/adventure",
    plot:
      "For some reason some people think I'm a really good movie.  But that's just because I'm better than the first release of this same movie that came out 5 years ago.  In all reality, I'm just an ok movie, but some fans think I'm God's gift to man... They just can't see how average I really am...",
  },
];

mongoose
  .connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    // Celebrity.create(celebrities)
    // .then((celebritiesFromDB) => {
    //   console.log(`Yay, ${celebritiesFromDB.length} celebrities have been added!`);
    Movie.create(movies)
      .then((moviesFromDB) => {
        console.log(`Yay, ${moviesFromDB.length} movies have been added!`);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.log("It did not work. :'(", err);
      });
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
