const mongoose = require("mongoose");
const Celebrities = require("../models/celebrity");

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

const celebritiesArr = [
  {
    name: "Joaquin Phoenix",
    occupation: "Actor",
    catchPhrase: "Is it just me or is it getting crazier out there?"
  },
  {
    name: "George Harrison",
    occupation: "Singer",
    catchPhrase:
      "If you don't know where you're going, any road'll take you there"
  },
  {
    name: "Jerry Lewis",
    occupation: "Comedian",
    catchPhrase: "I get paid for what most kids get punished for"
  }
];

Celebrities.deleteMany().then(() => {
  Celebrities.insertMany(celebritiesArr).then(celebCreated => {
    console.log("I have finished!");
    process.exit(0);
  });
});
