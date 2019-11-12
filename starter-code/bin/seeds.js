const mongoose = require("mongoose");

const celebrities = [
  {
    name: "Tom cruise",

    occupation: "actor",

    catchPhrase: "There is Life in every breath..."
  },

  {
    name: "Brad pitt",

    occupation: "actor",

    catchPhrase: "My theory is, be the shark"
  },

  {
    name: "Einstein",

    occupation: "Scientist",

    catchPhrase: "A person who never made a mistake never tried anything new."
  }
];

const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/lab-mongoose-movies");

Celebrity.create(celebrities, () => {
  console.log("success!");
});
