const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const celebSchema = new Schema(
  {
    name: { type: String, required: true },
    occupation: {
      type: String,
      enum: ["actor", "singer", "comedian", "unkown"],
    },
    catchPhrase: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Celebrity = model("Celebrity",celebSchema);
module.exports = Celebrity;