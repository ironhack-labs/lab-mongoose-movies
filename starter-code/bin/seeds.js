const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

//nombramos a nuestra DB
const dbName = 'starter-code';
//la conectamos usando mongoose
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true });

//creamos nuestra array de objetas con 3 celebrities
const celebrities = [
  {
    name: "Orlando Bloom",
    occupation: "Actor",
    catchPhrase: "I am the real Legolas!"
  },
  {
    name: "Hugh Jackman",
    occupation: "Actor",
    catchPhrase: "Yes its me, Wolverine"
  },
  {
    name: "Chris Hemsworth",
    occupation: "Actor",
    catchPhrase: "I am a god, I am the god thunder, I am Thor!"
  }
]

//habilitamos la creacion de los objetos dentro de la DB.
Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});