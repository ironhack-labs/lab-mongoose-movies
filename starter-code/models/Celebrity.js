const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});
const CelebrityModel = mongoose.model("celebrity", CelebritySchema);

module.exports = CelebrityModel;
