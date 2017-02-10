const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebritiesSchema = new Schema({
  name       : {
    type: String,
    required: true },
  ocupattion      : {
    type: String,
    required: true},
  catchPhrase   : {
    type: String,
    required: true}
});

const Celebrity = mongoose.model('Celebrity', CelebritiesSchema);

module.exports = Celebrity;
