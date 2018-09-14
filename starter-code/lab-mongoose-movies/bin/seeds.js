const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const celebrities = [
  {
      name: "Tom Cruise",
      occupation: "Actor",
      catchPhrase: "I'm a fucker"
  },
  {
      name: "Jerry Seinfeld",
      occupation: "Comedian",
      catchPhrase: "I'm super funny"
    },
  {
      name: "Mike Tyson",
      occupation: "Boxer",
      catchPhrase: "I will bite your ear"
  }
];

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', { useNewUrlParser: true })
  .then(x => {
    Celebrity.collection.drop().then(() => {
    }).catch(e => console.log(e))
    Celebrity.insertMany(celebrities).then(celebrities => {
      console.log(celebrities);
    }).catch(e => console.log(e))
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });