/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const CelebritySchema = new Schema({
  name : { type: String, unique : true },
  occupation : { type: String, unique : true },
  catchFrase  : { type: String, unique : true },
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
