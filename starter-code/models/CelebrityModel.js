const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchphrase: String
});

const CelebrityModel = mongoose.model("CelebrityModel", CelebritySchema);

module.exports = CelebrityModel;
