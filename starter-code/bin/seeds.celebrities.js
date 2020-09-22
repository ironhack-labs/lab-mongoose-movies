require("dotenv").config();
const Celebrity = require("../models/celebrity");
const mongoose = require("mongoose");

const celebrities = [
  {
    name: "JCVD",
    occupation: "Philosoph",
    catchPhrase: "J'adore l'eau, dans 20/30 ans il n'y en aura plus",
  },
  {
    name: "Mark Twain",
    occupation: "Writer",
    catchPhrase: "They didn't know it was impossible so they did it",
  },
  {
    name: "Tupac",
    occupation: "Singer",
    catchPhrase: "You gotta be able to smile through all this bullshit",
  }
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Celebrity.create(celebrities)
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
