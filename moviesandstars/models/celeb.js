const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebSchema = new Schema({
  celebName : String,
  celebOccup : String,
  celebPhrase : String,
})

const Celeb = mongoose.model('Celeb', CelebSchema);
module.exports = Celeb;
