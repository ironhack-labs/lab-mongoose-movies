const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritisSchema = new Schema({
  name: String,
  occupation: {type: String, enum: ["actor", "singer", "comedian", "unknown"]},
  catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebritisSchema);

module.exports = Celebrity;