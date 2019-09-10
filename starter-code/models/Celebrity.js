const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    enum: ["actor", "comedian", "singer", "unknown"]
  },
  catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;
