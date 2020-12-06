const mongoose = require("mongoose");

const Celebrity = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
})

module.exports = mongoose.model("Celebreties", Celebrity)