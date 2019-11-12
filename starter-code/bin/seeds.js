const celebrities = [
  {
    name: "Ian Curtis",
    occupation: "Singer",
    catchPhrase: "Love, love will tear us apart, again."
  },
  {
    name: "Keanu Reeves",
    occupation: "Actor",
    catchPhrase: "I thought it wasn't real."
  },
  {
    name: "Amitabh Bachchan",
    occupation: "Film Producer",
    catchPhrase:
      "I don't spend much time looking back at what happened. I do remember it, but I don't see any purpose of wanting to look back."
  }
];

const mongoose = require("mongoose");

const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/starter-code");

Celebrity.insertMany(celebrities)
  .then(documents => {
    console.log(`Success! ${documents.length} celebrities were added`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
