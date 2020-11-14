const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const celebrityModel = new Schema(
  {
    name: {type: String, required: true},
    occupation: {type: String, required: true},
    catchPhrase: {type: String, required: true},
  },

);
 
module.exports = model('Celebrity', celebrityModel);