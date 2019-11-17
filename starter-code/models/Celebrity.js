const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaCelebs = new Schema(
  {
    name: String,
    ocupation: String,
    catchFrase: String
  },
);

const Model = mongoose.model("Celebrity", schemaCelebs);
module.exports = Model;
