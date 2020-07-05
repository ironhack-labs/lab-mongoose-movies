require('../configs/db.config.js')
const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model.js')


const arrayCelebrity = [
    {
        name: "Bart Simpson",
        occupation: "actor",
        catchPhrase: "Multiplícate por cero",
    },
    {
        name: "Hommer Simpson",
        occupation: "actor",
        catchPhrase: "Ouch!",
    },
    {
        name: "Magie Simpson",
        occupation: "actrice",
        catchPhrase: "Buah!",
    },

]

Celebrity.deleteMany({})
  .then(() => Celebrity.create(arrayCelebrity))
  .then(celebrityElem => console.log(`You've add ${celebrityElem.length} celebrities`))
  .then(() => mongoose.connection.close())
  .catch(err => console.log ('error', err))