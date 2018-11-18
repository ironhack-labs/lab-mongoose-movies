/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const CelebritySchema = new Schema({
  name : String,
  occupation : String,
  catchFrase  : String,
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
