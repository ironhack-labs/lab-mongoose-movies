const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const celebrities = [
  { name: "Tom Cruise", occupation: "actor", catchPhrase: "Hey I am an actor" },
  { name: "Beyonce", occupation: "singer", catchPhrase: "Hey I am a singer" },
  {
    name: "Kim Kardashian",
    occupation: "unknown",
    catchPhrase: "Hey I am known"
  }
];

Celebrity.insertMany(celebrities)
  .then(dbRes => console.log("All celebrities have been added"))
  .catch(dbErr => console.log(`Err - ${dbErr}`));
