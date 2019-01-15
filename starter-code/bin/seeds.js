const mongoose = require("mongoose");
// const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

//Db creation
const dbName = "Celebrity";
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [{
//         name: "Arnold Schwarzenegger",
//         occupation: "Actor",
//         catchPhrase: "Hasta la vista baby"
//     },
//     {
//         name: "Tony Hawk",
//         occupation: "Skater",
//         catchPhrase: "Lets Rock!"
//     },
//     {
//         name: "Anthony kidies",
//         occupation: "Singer",
//         catchPhrase: "Dream of californication"
//     }
// ];

const movies = [
  {
    title: "Castlevania",
    genre: "Action",
    plot: "Netflix movie"
  },
  {
    title: "Pulp fiction",
    genre: "Drama",
    plot: "Guns and more guns"
  },
  {
    title: "Requiem for a dream",
    genre: "Drama",
    plot: "Drugs"
  }
];

// Celebrity.create(celebrities, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
