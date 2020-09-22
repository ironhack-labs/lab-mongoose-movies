require("dotenv").config();
const Celebrities = require("../models/celebrities.model");
// require("../config/mongodb");
const mongoose = require("mongoose");

const celebrities = [
  {
    name: "Grace Kelly",
    occupation: "Actress",
    catchPhrase: "Getting angry doesn't solve anything.",
  },
  {
    name: "Audrey Hepburn",
    occupation: "Actress",
    catchPhrase: "Nothing is impossible, the word itself says 'I'm possible'!",
  },
  {
    name: "Robert Mitchum",
    occupation: "Actor",
    catchPhrase:
      "The most important thing is to enjoy your life—to be happy—it's all that matters.",
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Celebrities.create(celebrities)
      .then((dbResult) => {
        console.log(dbResult);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
