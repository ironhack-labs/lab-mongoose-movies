const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");

mongoose.Promise = Promise;
mongoose
  .connect(
    "mongodb://localhost/celebrities",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(`Connected to Mongo!`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const celebrityData = [
  {
    name: "a",
    occupation: "a",
    catchPhrase: "a"
  },
  {
    name: "b",
    occupation: "b",
    catchPhrase: "b"
  },
  {
    name: "c",
    occupation: "c",
    catchPhrase: "c"
  }
];

Celebrity.create(celebrityData)
  .then(celebrityResult => {
    console.log(`inserted ${celebrityResult.length} celebrities`);
  })
  .catch(err => {
    console.log(`failureeeee`, err);
  });
