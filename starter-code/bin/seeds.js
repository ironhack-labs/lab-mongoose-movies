//require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const moviesAndCelebsApp = process.env.DBURL;  //en archivo env llama al fichero creado en compass
mongoose.connect('mongodb://localhost/moviesAndCelebsApp');


const celebrities = [
  {
    name: "Tom Hanks",
    occupation: "actor",
    catchPhrase: "Stupid is as stupid does."
  },
  {
    name: "Christian Bale",
    occupation: "actor",
    catchPhrase: "Something horrible is happening inside of me and I don’t know why."
  },
  {
    name: "Anthony Hopkins",
    occupation: "actor",
    catchPhrase: "Ate His Liver"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log('Created ${celebrities.lenght} celebrities');
  mongoose.connection.close()
})