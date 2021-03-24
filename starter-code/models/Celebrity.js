const mongoose = require("mongoose");

const { Schema } = mongoose;

const celebritiesSchema = new Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    catchPhrase: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Celebrity = mongoose.model("celebrity", celebritiesSchema);

module.exports = Celebrity;
