const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");
const dbName = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Axel",
//     occupation: "Influencer",
//     catchPhrase: "I influence everything"
//   },
//   {
//     name: "Luise",
//     occupation: "Actress",
//     catchPhrase: "I win every Oscar"
//   },
//   {
//     name: "Jen",
//     occupation: "Singer",
//     catchPhrase: "Lalaland"
//   }
// ];

// Celebrity.create(celebrities);

const movies = [
  {
    title: "First Movie",
    genre: "Romance",
    plot: "Man meets woman. They fall in love."
  },
  {
    title: "Second Movie",
    genre: "Science Fiction",
    plot: "People living in a space ship are attacked by aliens."
  },
  {
    title: "Third Movie",
    genre: "Comedy",
    plot: "A lot of funny things happening."
  }
];

// Celebrity.create(celebrities);
Movie.create(movies);
