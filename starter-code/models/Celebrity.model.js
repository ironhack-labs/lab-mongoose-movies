const { Schema, model } = require("mongoose");

const CelebritySchema = new Schema({
  name: String,
  ocupation: String,
  catchPhrase: String,
});

module.exports = model("Celebrity", CelebritySchema);