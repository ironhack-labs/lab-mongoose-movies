require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");

mongoose.connect(`mongodb://localhost/${process.env.DB}`);

const celebrities = [
  {
    name: "Leonardo DiCaprio",
    catchPhrase: "Where is my Oscar?"
  },
  {
    name: "Jonny Dep",
    occupation: "Actor",
    catchPhrase: "I'm f... crazy man"
  },
  {
    name: "Random Actor",
    occupation: "Random thing",
    catchPhrase: "Some random and deep phrase about him career"
  }
];

Celebrity.insertMany(celebrities)
  .then(allCeleb => console.log("Seed finished, all created: ", allCeleb))
  .then(x => mongoose.connection.close())
  .catch(err => console.log("An error with the seed: ", err));
