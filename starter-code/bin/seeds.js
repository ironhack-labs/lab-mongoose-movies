const mongoose = require("mongoose");

// const Celebrity = require("../models/Celebrity");

// require("../configs/db.config.js");

// const celebrities = [
//   {
//     name: "Agus",
//     occupation: "lead teacher",
//     catchPhrase: "D not worry, guys!",
//   },
//   {
//     name: "Val",
//     occupation: "TA",
//     catchPhrase: "Hello my babiesss!",
//   },
//   {
//     name: "Andre",
//     occupation: "TA",
//     catchPhrase: "Are you s*** yourselves?",
//   },
// ];

// Celebrity.create(celebrities)
//   .then((dbCelebrities) => {
//     console.log(`Created ${dbCelebrities.length} celebrities`);
//     mongoose.connection.close();
//   })
//   .catch((err) =>
//     console.log(
//       `An error occurred while creating celebrities in the DB: ${err}`
//     )
//   );

const Movie = require("../models/Movie");

require("../configs/db.config.js");

const fakeMovies = [
  {
    title: "Titanic",
    genre: "Dramatic",
    plot: "lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    title: "Moana",
    genre: "Animation",
    plot: "lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    title: "Pulp Fiction",
    genre: "Cult",
    plot: "lorem ipsum lorem ipsum lorem ipsum",
  },
];

Movie.create(fakeMovies)
  .then((dbMovies) => {
    console.log(`Created ${dbMovies.length} movies`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating movies in the DB: ${err}`)
  );
