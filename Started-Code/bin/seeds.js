const mongoose = require('mongoose');
const Celebrity = require('../model/Celebrity');

mongoose.connect('mongodb://localhost/celebrities-dev');

const celebrities = [
  {
    name: 'Jonnhy Deep',
    occupation: 'Pirate',
    catchPhrase: 'Where is the RUM GONE???s',
  },
  {
    name: 'Mark Hamill',
    occupation: 'Jedi',
    catchPhrase: 'NOOOOO!',
  },
  {
    name: 'Neil Patrick Harris',
    occupation: 'Fucker',
    catchPhrase: 'Is going to be LEGEN... WAIT FOR IT... DARY... LEGENDARY!',
  }
];

Celebrity.collection.drop();

celebrities.forEach(c => {
  let hola = new Celebrity(c);
  hola.save((err, celebrity) => {
    if (err) {
      throw err;
    }
    console.log(`celebrity saved ${celebrity.name}`)
  })
});

setInterval(() => {
  mongoose.disconnect();
}, 1000);
