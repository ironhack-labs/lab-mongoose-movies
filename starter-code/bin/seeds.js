require('dotenv').config();
const mongoose = require('mongoose');
//Model Movie
const Celebrity = require('../models/celebrity');

//Connecting DB

mongoose.connect(`mongodb://localhost/${process.env.DBNAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

//Remove previous collection if exist
Celebrity.collection.drop();

const celebrities = [
  {
    name : "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Mision imposible"
  },
  {
    name : "Kim Kardashian",
    occupation: "Vividora",
    catchPhrase: "Más operaciones"
  },
  {
    name : "Zidane",
    occupation: "Entrenador",
    catchPhrase: "Centro y gol"
  }
];

Celebrity.create(celebrities, (err)=>{
  if (err) {throw(err)};
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});