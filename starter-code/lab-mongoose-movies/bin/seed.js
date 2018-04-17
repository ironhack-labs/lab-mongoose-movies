const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity");

mongoose.Promise = Promise;
mongoose
  .connect("mongodb://localhost/lab-mongoose-movies", { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const celebrities = [
  {
    name: "David Hasselhoff",
    occupation: "Actor",
    catchPhrase: "I love burgers when I'm passed out drunk"
  },
  {
    name: "Fabio Lanzoni",
    occupation: "Unknown",
    catchPhrase: "Check out my hair"
  },
  {
    name: "Angela Merkel",
    occupation: "Politician",
    catchPhrase: "I love me a good doner kebab"
  }
];

Celebrity.create(celebrities)
  .then(() => {
    console.log(`Create ${celebrities.length} celebrities`);
  })
  .catch(err => {
    console.log("Creation ERROR", err);
  });
