const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebSchema = new Schema(
  {
    name: { type: String },
    occupation: { type: String },
    catchPhrase: { type: String }
  },
  {
    timestamps: true
  }
);

const Celebrity = mongoose.model("Celebritie", celebSchema);
module.exports = Celebrity;
