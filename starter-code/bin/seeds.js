require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const dbName = process.env.DBURL;
mongoose.connect('mongodb://localhost/'+dbName);


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

Celebrity.create(celebrities, (err, data) => {
  if (err) { throw(err) }
  console.log('Created ${celebrities.lenght} celebrities');
  mongoose.connection.close()
})