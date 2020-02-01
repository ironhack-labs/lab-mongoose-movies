/*jshint esversion: 6 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebSchema = new Schema(
  {
    name: String,
    ocupation: String,
    catchPhrase: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Celebrity", celebSchema);
