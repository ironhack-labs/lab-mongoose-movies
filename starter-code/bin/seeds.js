/* require("dotenv").config(); */
require("./../app");

/* const celebrityModel = require("./../models/Celebrity");

const celebrities = [
  {
    name: "Ada Lovelace",
    occupation: "actress",
    catchPhrase: "Ada is beautiful",
  },
  {
    name: "Doug Crockford",
    occupation: "singer",
    catchPhrase: "Have a wonderful voice",
  },
  {
    name: "Jill Fresh",
    occupation: "model",
    catchPhrase: "have gorgeous ass",
  },
 
];

celebrityModel.insertMany(celebrities)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr)); */

const movieModel = require("./../models/Movie");

const movies = [
  {
    title: "Wonderful day",
    genre: "comic",
    plot: "A bbablablablabla",
  },
  {
    title: "Succes story",
    genre: "singer",
    plot: "Have a wonderful voice and kill it in the game",
  },
  {
    title: "murder in town",
    genre: "drama",
    plot: "A model killed by her ex-boyfriend",
  },
 
];

movieModel.insertMany(movies)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr));