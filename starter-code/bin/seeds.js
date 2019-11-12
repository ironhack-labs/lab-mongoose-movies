const celebrities = [
  {
    name: "Michael Jackson",
    occupation: "Musician",
    catchPhrase: "I run marathon with a moonwalk"
  },

  {
    name: "Mickey Mouse",
    occupation: "Mouse",
    catchPhrase: "I cannot speak, I am a mouse"
  },

  {
    name: "Tom Hanks",
    occupation: "Actor",
    catchPhrase: "Run, Forest!"
  }
];

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/starter-code", { useNewUrlParser: true });

const Celebrity = require("../models/celebrity");
Celebrity.insertMany(celebrities)
  .then(documents => {
    console.log("Success!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
