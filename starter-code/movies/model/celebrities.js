
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CelebritiesSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const celebrities = mongoose.model("celebrities", CelebritiesSchema);
module.exports = celebrities;
