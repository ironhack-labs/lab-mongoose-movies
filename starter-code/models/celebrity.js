  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    name: { type: String, unique: true },
    occupation: String,
    catchPhrase: { type: String}
  },
  { timestamps: true }
);

const Celebrity = mongoose.model("Celebrity", schemaName);
module.exports = Celebrity;