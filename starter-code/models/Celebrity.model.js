const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const celebritySchema = new Schema(
  {
    name: { type: String, unique: true },
    occupation: { type: String },
    catchPhrase: { type: String},
  },
  {timestamps = true},
)

module.exports = model("Celebrity", celebritySchema);