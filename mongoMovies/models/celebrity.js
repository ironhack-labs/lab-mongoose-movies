const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebritiesSchema = new Schema({
  name       : String,
  occupation : String,
  catchPhrase: String,
});

const Celebrities = mongoose.model('celebrities', ProductSchema);
module.exports = celebrity;
