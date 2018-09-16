const mongoose = require("mongoose");
const Echema = mongoose.Schema;

const celebritySchema = new Echema({
  name: String,
  occupation: String,
  cathPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;