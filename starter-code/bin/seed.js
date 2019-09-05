const celebrityModel = require(".././models/celebrity");
console.log(celebrityModel);
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/secondmovies", {
  useNewUrlParser: true
});
const celebrities = [
  { name: "JCVD", occupation: "Cyborg", catchPhrase: "I'm aware" },
  { name: "AHHHH", occupation: "Dog", catchPhrase: "Don't know" },
  { name: "OHH", occupation: "Cat", catchPhrase: "Ohlala" }
];
// celebrityModel //si je le relance, je vais recréer les mêmes celebrités.
//   .insertMany(celebrities) // every mongoose method return a promise
//   .then(res => console.log("it went fine"))
//   .catch(err => console.log(err));

const moviesModel = require("../models/movy");
console.log(moviesModel);
const movies = [
  {
    title: "Oh my god!",
    genre: "Love Story",
    plot: "Church, husband, wife and mother"
  },
  { title: "Here we go...", genre: "Action", plot: "Guns, and roses" },
  {
    title: "Show must go on !",
    genre: "Musical",
    plot: "Drugs, songs, beautiful men..."
  }
];

// moviesModel //si je le relance, je vais recréer les mêmes celebrités.
//   .insertMany(movies) // every mongoose method return a promise
//   .then(res => console.log("it went fine"))
//   .catch(err => console.log(err));

module.exports = moviesModel;
// module.exports = celebrityModel;
