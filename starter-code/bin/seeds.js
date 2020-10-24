const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbName = "celebrities";
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  {
    name: "Harry Potter",
    occupation: "Auror",
    catchPhrase: "Expelliarmus",
  },
  {
    name: "Hermione Granger",
    occupation: "Ministry of Magic",
    catchPhrase: "Wingardium Leviosa",
  },
  {
    name: "Ron Weasley",
    occupation: "Auror",
    catchPhrase: "Stupefy",
  },
];

const createCelebrities = celebrities.map((celeb) => {
  const newCelebrity = new Celebrity(celeb);
  return newCelebrity
    .save()
    .then((celeb) => {
      return celeb.name;
    })
    .catch((error) => {
      throw new Error(`Impossible to add the celebrity. ${error}`);
    });
});
