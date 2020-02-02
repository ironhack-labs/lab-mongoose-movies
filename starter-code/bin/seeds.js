const celebrityModel = require("../models/celebrity");
const mongoose = require('mongoose');
const celebrities = [
  {
    name : "Rick Astley",
    occupation: "Singer",
    catchPhrase: "Never gonna give you up, never gonna let you"
    
  },
  {
    name : "Nicolas Cage",
    occupation: "Actor",
    catchPhrase: "I am not a demon. I am a lizard, a shark, a heat-seeking panther. I want to be Bob Denver on acid playing the accordion."
  },
  {
    name : "Amy Poehler",
    occupation: "Actress",
    catchPhrase: "Hoes before bros. Uteruses before duderuses. Ovaries before brovaries."
  }
];

mongoose
  .connect('mongodb://localhost/celebrities', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    celebrityModel
    .insertMany(celebrities)
    .then(dbRes => {
      console.log("Celebrities inserted");
    })
    .catch(err => {
      console.log("There was an error creating the celebrity");
    });

  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

module.exports = celebrities;

