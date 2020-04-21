// const celebrities = [
//   {
//     name: "David Hasselhoff",
//     occupation: "Preacher of Love",
//     catchPhrase: "Just looking for freedom",
//   },
//   {
//     name: "Borat Sagdiyev",
//     occupation: "Journalist",
//     catchPhrase: "Make Benefit Glorious Nation of Kazakhstan",
//   },
//   {
//     name: "Chuck Norris",
//     occupation: "Texas Ranger",
//     catchPhrase: "Cannot fly, but does it anyway",
//   },
// ];

// see also Express Cinema Lab, here using .create() instead of insertMany()
// const mongoose = require("mongoose");
// const Celebrity = require("../models/celebrity-model"); // celebrity-model.js

// mongoose
//   .connect("mongodb://localhost/starter-code", {
//     useNewUrlParser: true,
//   })
//   .then((x) => {
//     console.log(
//       `Connected to MongoDB from seeds.js! Database name: "${x.connections[0].name}"`
//     );

//     Celebrity.create(celebrities, (error, celebrity) => {
//       if (error) {
//         return handleError(error);
//       }
//       console.log("Celebrities created: ", celebrity);
//       x.connections[0].close();
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB", error);
//   });

// Iteration 7:

const movies = [
  {
    title: "Baywatch - The Movie",
    genre: "Action",
    plot: "Buchannon saves the day, again!",
  },
  {
    title:
      "Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
    genre: "Documentary",
    plot: "The real love story between Borat and Pamela.",
  },
  {
    title: "Way of the Dragon",
    genre: "Comedy",
    plot: "Fighting against Bruce Lee, yes THE Bruce Lee.",
  },
];

const mongoose = require("mongoose");
const Movie = require("../models/movie-model"); // movie-model.js

mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to MongoDB from seeds.js! Database name: "${x.connections[0].name}"`
    );

    Movie.create(movies, (error, movie) => {
      if (error) {
        return handleError(error);
      }
      console.log("Movies created: ", movie);
      x.connections[0].close();
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
