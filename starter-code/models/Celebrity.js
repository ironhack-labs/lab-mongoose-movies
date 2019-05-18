const mongoose = require("mongoose")
const Schema = mongoose.Schema

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
}, {
  timestamps: true
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity

// name - String(like Tom Cruise, Beyonce, Daffy Duck, etc.)

// occupation - String(what the celebrity does, why they are famous.For example actor, singer, comedian, or you can put unknown
//   if your celebrity is someone like Kim Kardashian)

// catchPhrase - String(every celebrity needs a good
//   catch phrase.Well maybe not all of them have one in real life, but all of our celebrities will have a
//   catch phrase.This can be pretty much anything)