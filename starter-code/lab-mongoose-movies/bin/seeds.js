const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity-model");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  })
  .catch((err) => {
    console.log("Error connecting to mongo", err);
  });

  const celebrities = [
    {
      name: "Phil Rachid",
      occupation: "Actor",
      catchPhrase: "I don't eat porc, but I will if I can get more followers"
    },
    {
      name: "John PingPong",
      occupation: "Comedian",
      catchPhrase: "I will rice you all"
    },
    {
      name: "Steven Tyrone",
      occupation: "Producer",
      catchPhrase: "May the chicken be with you"
    }
  ]

  Celebrity.create(celebrities)
  .then(() => {
    console.log(`Created ${celebrities.length} celebrities`);
  })
  .catch((err) => {
    console.log("Creation ERROR", err);
  });