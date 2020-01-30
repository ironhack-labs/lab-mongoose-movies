const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: { type : String, required : true, unique : true },
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", schema);
module.exports = Celebrity;
