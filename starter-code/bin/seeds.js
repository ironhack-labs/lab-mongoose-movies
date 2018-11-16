const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');

mongoose.connect(
  "mongodb://localhost/starter-code", {useNewUrlParser: true})
        .then(() => console.log("Connected!"));

const celebrities = [
  {
    name: "Ramon 'El Vanidoso'",
    occupation: "Atracador de bancos",
    catchPhrase: "La droga es la auténtica salud"
  },
  {
    name: "Ares 'Pim,Pam, Toma lacasitos'",
    occupation: "Bailarin",
    catchPhrase: "Viva España, viva el Rey, viva el orden y la ley"
  },
  {
    name: "Fernando Arrabal'",
    occupation: "Escritor",
    catchPhrase: "El milenarismo va a llegar"
  }
];


Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});