const celebrityData = [
  {
    name: "Brad Pitt",
    occupation: "actor",
    catchPhrase: "I love JavaScript"
  },
  {
    name: "John F Kennedy",
    occupation: "Politician",
    catchPhrase: "Ich bin ein Berliner"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "I love singing"
  }
];

const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity");

mongoose.connect("mongodb://localhost/starter-code", { useNewUrlParser: true });

Celebrity.insertMany(celebrityData)
  .then(documents => {
    console.log(`${documents.length} documents are successfully created.`);
  })
  .catch(err => {
    console.log(err);
  });

//run mongo
//run node bin/seeds.js
