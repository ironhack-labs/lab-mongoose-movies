const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const celibritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const celibrityModel = mongoose.model("Celebrity", celibritySchema);

module.exports = celibrityModel;