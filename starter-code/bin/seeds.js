const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbName = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Axel",
    occupation: "Influencer",
    catchPhrase: "I influence everything"
  },
  {
    name: "Luise",
    occupation: "Actress",
    catchPhrase: "I win every Oscar"
  },
  {
    name: "Jen",
    occupation: "Singer",
    catchPhrase: "Lalaland"
  }
];

Celebrity.create(celebrities);
