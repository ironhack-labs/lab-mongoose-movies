require('dotenv').config()
require('../config/db.config')
const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity.model')

const seedCelebs = [
  {
    name: 'Kim Kardashian',
    catchPhrase: 'I support my mother'
  },
  {
    name: 'Katy Perry',
    occupation: 'Singer',
    catchPhrase: "You're a firework"
  },
  {
    name: 'Kristen Wiig',
    occupation: 'Actress',
    catchPhrase: "And I'm Dooneese"
  },
]

Celebrity.deleteMany()
  .then(() => {
    Celebrity.create(seedCelebs)
      .then((celebrity) => {
        console.log(`${seedCelebs.length} drones added to the database`);
      })
      .then(() => {
        mongoose.connection.close();
        console.log("Mongoose disconected")
      })
  })
  .catch((error) => console.log(error))