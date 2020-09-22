const mongoose = require("mongoose");

const CelebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const CelebrityModel = mongoose.model("celebrities", CelebritySchema);

module.exports = CelebrityModel;