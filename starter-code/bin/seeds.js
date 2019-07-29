const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.model");

const dbName = "celebrity0719";
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

const celebrities = [
  {
    name: "Isabel Pantoja",
    occupation: "Singer",
    catchPhrase: "teeth teeth which is what fuck them"
  },
  {
    name: "Pocholo",
    occupation: "Walker",
    catchPhrase: "Where is my bag?"
  },
  {
    name: "Rebeca",
    occupation: "Singer",
    catchPhrase: "you were always hard to peel"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
