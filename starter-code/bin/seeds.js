const mongoose = require('mongoose');

const celebritiesModel = require('../models/celebrity.js');

mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebritiesArray = [{
  name: "Micheal Jackson",
  occupation: "Main actor",
  catchPhrase: "WOOOOooooooo"
}, {
  name: "Angelina Jolie",
  occupation: "Main actor's wife",
  catchPhrase: "pan pan pan pan, you're dead"
}, {

  name: "Silvestre Stallon",
  occupation: "Vilain actor",
  catchPhrase: "It's not my war"
}]

celebritiesModel.insertMany(celebritiesArray)
  .then(celebResults => {
    console.log(`inserted ${celebResults.length} celebrity array ✅`);
  })
  .catch(err => {
    console.log("insertMany faillure", err)
  });