const mongoose = require("mongoose")

let CelebSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String
})

let Celeb = mongoose.model("Celeb", CelebSchema)

module.exports = Celeb