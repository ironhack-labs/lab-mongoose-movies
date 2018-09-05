const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity-model.js");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/starter-code', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [
  {
    name: "Brad Pitt",
    occupation: "Actor",
    catchPhrase: "Happiness is overrated. There has to be conflict in life."
  },
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "I don't care who you are, life has challenges."
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: `We need to reshape our own perception of how we view ourselves. 
    We have to step up as women and take the lead.`
  }
];

Celebrity.create(celebrities)
.then(celebrityResults => {
    console.log(`Inserted ${celebrityResults.length} celebrities 😎`);
})
.catch(err => {
    console.log("Create FAILURE!! 💩", err);
});