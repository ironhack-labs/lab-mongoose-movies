const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  { timestamps: true }
);

const Celebrity = mongoose.model("Celebrity", userSchema);

module.exports = Celebrity;
