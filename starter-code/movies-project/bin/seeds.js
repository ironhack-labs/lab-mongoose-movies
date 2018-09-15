const Celebrity = require('../models/celebrity.js');
const mongoose = require('mongoose');
const data = [
  {
    name: "Bruce Dickinson",
    occupation: "Singer",
    catchPhrase: "Scream for me"
  },
  {
    name: "Kermit The Frog",
    occupation: "Being a Muppet",
    catchPhrase: "Hi-Ho"
  },
  {
    name: "Abbadon The Despoiler",
    occupation: "Traitor",
    catchPhrase: "Death to the false emperor"
  }
];

mongoose.connect('mongodb://localhost/movies-project', { UseNewUrlParser: true })
  .then(data => {
    console.log("Connected to mongoDB: " + data.connections[0].name)
    Celebrity.collection.drop()
  })
  .then(() => Celebrity.insertMany(data))
  .catch(e => console.log(e))