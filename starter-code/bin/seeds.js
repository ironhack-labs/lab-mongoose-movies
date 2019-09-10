const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose.connect("mongodb://localhost/celebrity-lab", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  //   useUnifiedTopology: false.
  useUnifiedTopology: true
});

// const celebrities = [
//   {
//     name: "Tom Cruise",
//     occupation: "actor",
//     catchphrase: "mission impossible"
//   },
//   {
//     name: "Hugh Laurie",
//     occupation: "comedian",
//     catchphrase: "It's Lupus"
//   },
//   {
//     name: "Matthew Mcconaughey",
//     occupation: "actor",
//     catchphrase: "Alright, alright, alright"
//   }
// ];

const movies = [
  {
    title: "Mission Impossible",
    genre: "Action",
    plot:
      "Something happens. Tom Cruise runs. Tinureeeeeu, tinureuuuuu ... tadam!"
  },
  {
    title: "101 Dalmatians",
    genre: "Kids Horror",
    plot: "Cruela wants, nay NEEDS a jacket"
  },
  {
    title: "Wolf of Wall Street",
    genre: "biographical",
    plot: "there's drugs and money, and whatnot"
  }
];

// Celebrity.create(celebrities).then(data => {
//   console.log(`Success! Imported ${data.length} celebrities to the database`);
//   //   mongoose.connection.close();
// });

Movie.create(movies).then(data => {
  console.log(`Success! Imported ${data.length} movies to the database.`);
  mongoose.connection.close();
});
