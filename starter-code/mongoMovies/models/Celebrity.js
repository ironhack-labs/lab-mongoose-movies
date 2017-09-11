const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebritySchema = new Schema({
  name       : String,
  occupation : String,
  catchPhrase: String,
});

//const Product = mongoose.model('Product', ProductSchema);
//module.exports = Product;

module.exports = mongoose.model('Celebrity', CelebritySchema);
