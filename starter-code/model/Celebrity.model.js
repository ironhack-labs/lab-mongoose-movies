const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: { type: String, require: true, unique: true },
  occupation: { type: String, require: true },
  catchPhrase: { type: String, require: true },
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
