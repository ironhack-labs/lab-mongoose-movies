const mongoose = require("mongoose");
require('dotenv').config()
const Celebrity = require('../models/Celebrity');

const celebrity = [
  {
    name: "Nicholas Cage",
    occupation: "Actor",
    catchPhrase: "Hola"
  },
  {
    name: "Michelle Obama",
    occupation: "Superwoman",
    catchPhrase: "Bye"
  },
  {
    name: "Barbara Leni",
    occupation: "Actriz",
    catchPhrase: "Whatever"
  }
]


mongoose.connect(process.env.DB, {useNewUrlParser: true})
.then(() => {
  console.log(`Connected to mongoose`) 
})
.then(() => {
  return Celebrity.insertMany(celebrity)
})
.then(celebrity => {
  console.log(celebrity) 
  mongoose.connection.close() 
})