const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  },
  { timestamps: true }
);

const Model = mongoose.model("Celebrities", schemaName);
module.exports = Model;