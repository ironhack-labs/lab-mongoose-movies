const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celibritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celibrity = mongoose.model("Celibrity", celibritySchema);

module.exports = Celibrity;