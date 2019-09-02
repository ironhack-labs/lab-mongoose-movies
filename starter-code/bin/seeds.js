const mongoose = require("mongoose");
const CelebrityModel = require("./../Model/Celebrity");
const MovieModel = require("./../Model/Movie");
mongoose.connect("mongodb://localhost/starter-code");

const celebrities = [
  {
    name: "Chris Hemsworth",
    occupation: "actor",
    catchPhrase: "Thunder god"
  },
  {
    name: "Céline Dion",
    occupation: "singer",
    catchPhrase: "J'irai où tu iras"
  },
  {
    name: "Pierre Ninet",
    occupation: "actor",
    catchPhrase: "le bg français"
  }
];

// CelebrityModel.create(celebrities)
//   .then(dbres => console.log(dbres))
//   .catch(err => console.log(err));

const movies = [
  {
    title: "La Mome",
    genre: "drama",
    plot: "Biography of Edith Piaf"
  },
  {
    title: "Thor",
    genre: "fantasy",
    plot: "marvel superhero"
  },
  {
    title: "Halloween",
    genre: "horror",
    plot: "Follow a murderer during an halloween night"
  }
];

// MovieModel.create(movies)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
