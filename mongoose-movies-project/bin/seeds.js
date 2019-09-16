const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity-model");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/mongoose-movies-project', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [
  {
    name: "Justin Bieber",
    occupation: "Singer",
    catchPhrase: "Never say never."
  },
  {
    name: "Audrey Hepburn",
    occupation: "Actor",
    catchPhrase: "Nothing is impossible, the word itself says I'm possibe."
  },
  {
    name: "Marina Abramovic",
    occupation: "Artist",
    catchPhrase: "When you have a nonverbal conversation with a total stranger, then he can't cover himself with words, he can't create a wall."
  },
  {
    name: "Gad Emaleh",
    occupation: "Comedian",
    catchPhrase: "Where is Brian? Brian is in the kitchen."
  },
  {
    name: "Nassum Taleb",
    occupation: "Flaneur",
    catchPhrase: "I want to live happily in a world I don't understand."
  }
];

Celebrity.create(celebrities)
  .then(() => {
    console.log(`Created ${celebrities.length} celebrities`);
  })
  .catch((err) => {
    console.log("Creation ERROR", err);
  });