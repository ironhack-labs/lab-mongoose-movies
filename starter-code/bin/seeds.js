const mongoose = require('mongoose')
const Celebrity = require("../models/celebrity")

const dbName = "mongoose-movies"
mongoose.connect(`mongodb://localhost/${dbName}`)



const celebrities = [
  {
    name: "Tasos",
    occupation: "Footballer",
    catchphrase: "goal!"
  },
  {
    name: "Hamza",
    occupation: "Student",
    catchphrase: "yes i did!"
  },
  {
    name: "Gary",
    occupation: "Arbeitslos",
    catchphrase: "Go home!"
  },
  {
    name: "Thor",
    occupation: "Teacher Assistant",
    catchphrase: "Have you googled it?"
  }

]
Celebrity.collection.drop()
console.log("Celebrity collection deleted..")

Celebrity.create(celebrities, err => {
  if (err) {
    throw err
  }


  console.log("You made " + celebrities.length + " celebrities in your database")
  mongoose.connection.close()
})
