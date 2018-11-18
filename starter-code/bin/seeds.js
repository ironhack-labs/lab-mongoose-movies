const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");

mongoose.connect(`mongodb://localhost/celebrities`, { useNewUrlParser: true } );

const celebrities = [
  {
    name: "Daniel Craig",
    occupation: "Actor",
    catchPhrase: "The name is Bond, James Bond"
  },
  {
    name: "Woody",
    occupation: "Toy Story character",
    catchPhrase: "You're my favorite deputy!"
  },
  {
    name: "Lady Gaga",
    occupation: "Singer",
    catchPhrase: "Im obsessively opposed to the typical"
  }
];
 Celebrity.collection.drop();
Celebrity.create(celebrities)
  .then(() => console.log("Celebs created on DB"))
  .then(() => mongoose.disconnect());