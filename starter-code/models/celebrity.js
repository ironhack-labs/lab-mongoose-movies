const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CelebritySchema = new Celebrity({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Product = mongoose.model("Celebrity", CelebritySchema);
module.exports = Celebrity;
