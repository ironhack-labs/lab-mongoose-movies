const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
  name       : String,
  price      : Number,
  imageUrl   : String,
  description: String,
});

//const Product = mongoose.model('Product', ProductSchema);
//module.exports = Product;

module.exports = mongoose.model('Product', ProductSchema);
