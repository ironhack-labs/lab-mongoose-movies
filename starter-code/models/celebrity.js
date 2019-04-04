const mongoose = require("mongoose");

const CelebritySchema = mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model("celebrity", CelebritySchema);

module.exports = Celebrity;
