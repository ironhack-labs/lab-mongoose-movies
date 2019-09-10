const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/starter-code", {
  useNewUrlParser: true
});

const initCelebs = [
  {
    name: "Beyonce",
    occupation: "Queen",
    catchPhrase: "All the single ladies"
  },
  {
    name: "Ruth Bader Ginsberg",
    occupation: "Supreme Court Justice",
    catchPhrase: "Oye Oye y'all be sexist"
  },
  {
    name: "Florence Nightingale",
    occupation: "Nurse",
    catchPhrase: "People be dying less because I made the Red Cross"
  }
];

Celebrity.insertMany(initCelebs)
  .then(data => console.log("add successful"))
  .catch(err => {
    console.log("error while adding", err);
  });
