const mongoose = require("mongoose");

const celebritySchema = {
  name: String,
  occupation: String,
  catchPhrase: String,
};

const Schema = mongoose.Schema;
const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
