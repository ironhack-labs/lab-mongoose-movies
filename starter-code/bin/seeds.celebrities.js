require("dotenv").config();
const Celebrity = require("../models/celebrity");
const mongoose = require("mongoose");

const celebrities = [
  {
    name: "Russell Crowe",
    occupation: "Actor",
    catchPhrase: "What we do in life echoes in eternity.",
  },
  {
    name: "Ryan Reynolds",
    occupation: "Actor",
    catchPhrase: "Now, I'm about to do to you what Limp Bizkit did to music in the late '90s.",
  },
  {
    name: "Peter Jackson",
    occupation: "Director",
    catchPhrase: "The most honest form of filmmaking is to make a film for yourself.",
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
