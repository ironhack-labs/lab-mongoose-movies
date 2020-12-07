const mongoose = require("mongoose")

const CelebritySchema = new mongoose.Schema({
  name:String,
  occupation:String,
  catchPhrase:String
})

module.exports = mongoose.model("Celebrity",CelebritySchema);