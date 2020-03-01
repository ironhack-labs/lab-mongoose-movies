const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js")
const Movie = require("../models/movie.js")


const dbName = 'mongoose-movie';
mongoose.connect(`mongodb://localhost/${dbName}`); // ?? 

const celebrities = [
  {
    name: "Katrin Abel",
    occupation: "It girl and socialite/influencer",
    catchPhrase: "Follow4follow, like4like, hatersgonnahate"
  },
  {
    name: "Eullin Chang",
    occupation: "Rockstar and freelance pharmacist",
    catchPhrase: "Break guitars"
  },
  {
    name: "Pernille Kloster",
    occupation: "Influencer and Norwegian royalty",
    catchPhrase: "Oy!"
  },
  {
    name: "Emina Sonnad",
    occupation: "Astronaut",
    catchPhrase: "I'm so lost"
  }
]

const movies = [
  {
  title: "Mongoose Attack",
  genre: "comedy",
  plot: "Everything is going great at the family picnic... until it's not",
  actors: ['5be0112b12a4d21d1e935636', '5be0116fd6cbf41d53dbc66f']
  },
  {
  title: "Mongoose Attack 2",
  genre: "horror",
  plot: "An ordinary exorcism goes horribly wrong when the spirit of a demon mongoose is summoned ",
  actors: ['5be0116fd6cbf41d53dbc670', '5be0116fd6cbf41d53dbc672']
  },
  {
  title: "Mongoose Attack 3",
  genre: "Romance",
  plot: "Two brokenhearted mongeese learn to love again",
  actors: [ '5be0116fd6cbf41d53dbc671']
  }
]

// Movie.create(movies)
// .then((movies) => {console.log("The movies were saved")})
// .catch((err) => {console.log("error: ", err)});

// Celebrity.create(celebrities)
// .then((celebs) => {console.log("The celebs were saved")})
// .catch((err) => {console.log("error: ", err)});

// Movie.populate('actors')
// .then((movies) => {console.log("The movies were saved")})
// .catch((err) => {console.log("error: ", err)});