const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/celebrities", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  {
    name: "Brad Pitt",
    occupation: "Actor",
    catchPhrase: "What is in the box?",
  },
  {
    name: "Arnold Schwarznegger",
    occupation: "Actor",
    catchPhrase: "I'll be back.",
  },
  {
    name: "Donald Trump",
    occupation: "President",
    catchPhrase: "Billions and billions.",
  },
];

Celebrity.create(celebrities)
  .then((celebritiesFromDB) => {
    console.log(`Added ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(
      `An error occurred while adding celebrities from the DB: ${err}`
    )
  );
