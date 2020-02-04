let mongoose = require("mongoose");

let celebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchphrase: String
});

let Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
