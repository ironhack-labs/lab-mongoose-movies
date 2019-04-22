// Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
require('dotenv').config()

const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

mongoose.connect(process.env.DB)

// Call the Celebrity model's create method with the array as argument.

const celebrities = [
  {
    name: "Hugh Jackman",
    occupation: "actor",
    catchPhrase: "What do they call you? Wheels?"
  },
 {
  name: "Scarlett Johanson",
  occupation: "actress",
  catchPhrase: "I wish Ricardo MaGuz was single"
 },
 {
  name: "Christian Bale",
  occupation: "actor",
  catchPhrase: "I AM BATMAN"
 } 
]

// In the create method's callback, display feedback.

Celebrity.create(celebrities)
  .then(celebrity => {
    console.log(`Nice! You've created ${celebrities.length} celebrities.`)
    mongoose.connection.close()
  })

// Run the seed file with node to seed your database.
// Check the database with the mongo command to confirm that your data was saved.