const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/celebrity");
Celebrity = require("../models/celebrity.js");

Celebrity.create(
  [
    { name: "Nabilla", occupation: "unknown", catchPhrase: "Allo" },
    {
      name: "Bob Marley",
      occupation: "singer",
      catchPhrase: "It all begins with a joint"
    },
    {
      name: "Frank Ribery",
      occupation: "footballeur",
      catchPhrase: "La routourne va tourner"
    }
  ],
  function(err, i) {
    if (err) console.error(err);
    else {
      console.log("saved");
    }
    mongoose.connection.close();
  }
);
