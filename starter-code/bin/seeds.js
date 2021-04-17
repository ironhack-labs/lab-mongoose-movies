const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

const celebrities = [
  {
    name: "Sheldon Cooper",
    occupation: "unknown",
    catchPhrase: "Bazinga!",
  },
  {
    name: "Paris Hilton",
    occupation: "unknown",
    catchPhrase: "That's Hot",
  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: "Like this (I woke up)",
  },
];

mongoose.connect("mongodb://localhost/celebrities-app")
.then(() => {
  console.log("Connected to database");

  Celebrity.create(celebrities)
    .then((celebrities) => {
        console.log(celebrities);
    })
})
.catch((err) =>{
    console.error(err)
})
