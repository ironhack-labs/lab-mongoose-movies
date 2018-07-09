const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritiesSchema = new Schema({
  name: String,
  occupation: String ,
  catchPhrase: String,
});

const Celebritie = mongoose.model("Celebritie", celebritiesSchema);

module.exports = Celebritie;