
const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema(
  {
    name: String,
    occupation: { type: String, default: 'unknown' },
    catchPhrase: String
  },
  {
    timestamps: true
  }
);

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;
