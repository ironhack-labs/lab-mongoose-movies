const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebritySchema = new Schema ({
  name: String, 
  ocupation: String, 
  catchPhrase: String,
  image: String,
  description: String, 
  showtimes: {
    type: Array
  },
}) 

module.exports = celebritySchema;
