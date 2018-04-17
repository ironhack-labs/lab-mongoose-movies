const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebritySchema = new Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String, default: "Unknown" },
    catchPhrase: { type: String, default: "Screw you guys, I'm going home" }
  },
  {
    timestamps: true
  }
);

// create the Book model for the books collection
const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
