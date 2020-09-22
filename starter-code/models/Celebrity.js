const mongoose = require("mongoose");

const CelebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchphrase: String,
});

const CelebrityModel = mongoose.model("celebrities", CelebritySchema);

module.exports = CelebrityModel;