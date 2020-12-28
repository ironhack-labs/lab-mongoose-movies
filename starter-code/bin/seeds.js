const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");
const Movie = require("../models/movie.model");

const DB_NAME = "celebrities";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const celebrities = [
//   { name: "Donal Trump", occupation: "Golfer", catchPhrase: "Fake News!" },
//   {
//     name: "Angela Merkel",
//     occupation: "Easty",
//     catchPhrase: "Wir schaffen das",
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Propogandist",
//     catchPhrase: "We are under attack",
//   },
// ];

// Celebrity.create(celebrities)
//   .then((celebritiesFromDB) => {
//     console.log(`Created ${celebritiesFromDB.length} celebrities`);
//     mongoose.connection.close();
//   })
//   .catch((err) =>
//     console.log(`An error occurred while getting movies from the DB: ${err}`)
//   );

const movies = [
  {
    title: "Scary Movie 10",
    genre: "Funny Horror",
    plot: "Catch the clown, if you can",
  },
  {
    title: "Titanic 2",
    genre: "Love",
    plot: "Cry and die",
  },
  {
    title: "I wanna u u a",
    genre: "Song",
    plot: "danced nacked like last time",
  },
];

Movie.create(movies)
  .then((moviesFromDB) => {
    console.log(`Created ${moviesFromDB.length} movies`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while getting movies from the DB: ${err}`)
  );
