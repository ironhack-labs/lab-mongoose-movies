//Iteration #1
const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    catchPhrase: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const celebrityModel = mongoose.model("celebrity", celebritySchema);
module.exports = celebrityModel;