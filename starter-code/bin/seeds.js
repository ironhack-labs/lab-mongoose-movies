// const mongoose = require("mongoose");
// const Celebrity = require("../models/celebrity");

// const dbName = "celebrity-project";
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrity = [
//   {
//     name: "Kevin Hart",
//     occupation: "comedian",
//     catchPhrase: "Alright, Alright, Alright"
//   },
//   {
//     name: "Dwayne Douglas Johnson",
//     occupation: "actor",
//     catchPhrase: "idk"
//   },
//   {
//     name: "Mark Sinclair",
//     occupation: "actor",
//     catchPhrase: "Family first"
//   }
// ]

// Celebrity.create(celebrity, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebrity.length} celebrity`);
//   mongoose.connection.close();
// });


const mongoose = require("mongoose");
const Movie = require("../models/movie");

const dbName = "movies";
mongoose.connect(`mongodb://localhost/${dbName}`);


const Movie = [
  {
  title: "Creating a movie",
  year: "2019",
  director: "Anghy Pomar",
  duration: "1hr",
  genre: ["Action"],
  rate: "1.0"
  }
]

Movie.create(movie, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movie.length} movie`);
  mongoose.connection.close();
});