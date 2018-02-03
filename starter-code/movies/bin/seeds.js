const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/celebs");
const Celeb = require("../models/celebrity");

const celebs = [
  {
    name: "Gavin Berks",
    occupation: "Radish promoter",
    catchphrase: "One dish- many radish!"
  },
  {
    name: "Penelope Caternomble",
    occupation: "Agent for Daves",
    catchphrase: "A Dave for every day"
  },
  {
    name: "Barry Banane",
    occupation: "juggler",
    catchphrase: "Get off me"
  }
];

Celeb.create(celebs, (err, docs) => {
  if (err) {
    console.error(err);
  }
  docs.forEach(celeb => {
    console.log(celeb.name);
  });
  mongoose.connection.close();
});
