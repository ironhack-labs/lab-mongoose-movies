
const Celebrity = require("../models/celebrities-model.js");

const mongoose = require("mongoose");

mongoose.Promise = Promise;
mongoose // make sure to connect to same DB as in app.js
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrityData = [
  {
    name: "Kamillia Kardashian",
    occupation: "unknown",
    catchPhrase: "My butt is bigger than the moon"
  },
  {
    name: "Robert Fart",
    occupation: "comedian",
    catchPhrase: "My fart is bigger than the moon"
  },
  {
    name: "Lucinda Cucina",
    occupation: "actor",
    catchPhrase: "My kitchen is bigger than the moon"
  }
];

Celebrity.create(celebrityData)
  .then((celebrityResults) => {
    console.log(`Created ${celebrityResults.length} celebs in the database`);
  })
  .catch((err) => {
    console.log('Create celebs FAIL', err);
  });
