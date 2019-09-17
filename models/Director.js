const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  image: String,
});

const Director = mongoose.model("Director", directorSchema);

module.exports = Director;