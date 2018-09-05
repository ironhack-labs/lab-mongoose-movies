const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity-model.js")

mongoose.Promise = Promise;

mongoose
  .connect("mongodb://localhost/lab-mongoose-movies", {useMongoClient: true})
  .then(() => {
    console.log("Connected to mongo!")
  })
  .catch(err => {
    console.error("Error connecting to mongo", err)
  })

const celebrityData = [
  {
    name: "Barack Obama",
    occupation: "Former US President",
    catchPhrase: "Mike drop",
  },
  {
    name: "Britney Spears",
    occupation: "Performer",
    catchPhrase: "It's Britney, bitch",
  },
  {
    name: "Kim Kardashian",
    occupation: "Unknown",
    catchPhrase: "Kanye is not crazy",
  }
]

Celebrity.create(celebrityData)
  .then(celebrityResult => {
    console.log(`Created CELEBRITY ${celebrityResult.name}`)
  })
  .catch(err => console.log(err))