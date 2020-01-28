const mongoose = require("mongoose");

// https://mongoosejs.com/docs/validation.html
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