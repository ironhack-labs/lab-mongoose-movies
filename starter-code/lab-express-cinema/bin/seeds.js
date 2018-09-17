const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");
const Actor = require("../models/Actor");

mongoose.Promise = Promise;
mongoose
  .connect(
    "mongodb://localhost/celeb-project",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let celebrities = [
  {
    name: "Britney",
    occupation: "singer",
    catchPhrase: "It's Britney bitch"
  },
  {
    name: "Lana",
    occupation: "singer",
    catchPhrase: "Live fast. Die young. Be wild. Have fun."
  },
  {
    name: "Haruki Murakami",
    occupation: "author",
    catchPhrase: "Death is not the opposite of life, but a part of it."
  }
];

Celebrity.create(celebrities)
  .then(celebrities => {
    console.log("The user is saved and its value is: ", celebrities);
  })
  .catch(err => {
    console.log("An error happened:", err);
  });

let movies = [
  {
    title: "A",
    genre: "AA",
    plot: "AAA"
  },
  {
    title: "B",
    genre: "BB",
    plot: "BBB"
  },
  {
    title: "C",
    genre: "CC",
    plot: "CCC"
  }
];

Movie.create(movies)
  .then(movies => {
    console.log("The movie is saved and its value is: ", movies);
  })
  .catch(err => {
    console.log("An error happened:", err);
  });

let Actors = [
  {
    _celebrity: ["5b843d89f6cb1a6c4af04948"],
    _movies: ["5b855423a05cc911d4daed8d"]
  }
];

Actor.create(Actors)
  .then(actors => {
    console.log("The actor is saved and its value is: ", actors);
  })
  .catch(err => {
    console.log("An error happened:", err);
  });
