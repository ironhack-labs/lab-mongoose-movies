const { model, Schema } = require("mongoose");

const celebs = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  })

  module.exports = model("Celebrity", celebs);