const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose
  .connect('mongodb://localhost/Movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });  

const celebArray = [{
    name: "Jelte",
    occupation: "developer",
    catchPhrase: "What the frog?"
}, {
    name: "Martin",
    occupation: "full-stack",
    catchPhrase: "my phone!!"
}, {
    name: "Jan-Pieter",
    occupation: "football-player",
    catchPhrase: "I'm loosing my mind"
}]


Celebrity.remove({}, () => {
    for (let i = 0; i < celebArray.length; i++) {
        Celebrity.create(celebArray[i]);
    }
})
