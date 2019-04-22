const mongoose = require("mongoose");
const { Schema }  = mongoose;

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrity = mongoose.model("Celebrities", CelebritySchema);

module.exports = Celebrity;