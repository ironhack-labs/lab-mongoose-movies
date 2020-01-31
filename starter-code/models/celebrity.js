const mongoose = require("mongoose");

const Schema = mongoose.Schema
const celebritySchema = new Schema(
  {
    //_id: objectId,
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