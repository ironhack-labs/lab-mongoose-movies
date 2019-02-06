const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create the Book schema using the Mongoose "Schema" class
const celebritySchema = new Schema(
  {
    // document structure & rules defined here
    name: { type: String, required: true },
    occupation: { type: String, default: "Unknown" },
    catchPhrase: { type: String }
  },
  {
    timestamps: true
  }
);

const Celebrity = mongoose.model("Celebrity", celebritySchema);

// share the "Book" model with other parts of the app
module.exports = Celebrity;
