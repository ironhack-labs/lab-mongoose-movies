const mongoose = require("mongoose");
const Schema = new mongoose.Schema;

const CelebritySchema = {
  name: String,
  occupation: String,
  catchPhrase: String
};

const CelebrityModel = mongoose.model("celebrities", CelebritySchema);

module.exports = CelebrityModel;