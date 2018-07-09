const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const express       = require('express');
const router        = express.Router();

const celebritySchema = new Schema({
  name: String,
  show: String,
  phrase: String
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;